<template>
    <LoadingView :loading="initialLoading">
        <Head :title="__('Backups')" />

        <div class="flex mb-6 items-center justify-between">
            <Heading>
                {{ __('Backups') }}
            </Heading>

            <div class="flex items-center justify-end space-x-2">
                <Dropdown dusk="select-all-dropdown">
                    <Button variant="ghost" icon="ellipsis-horizontal" />

                    <template #menu>
                        <DropdownMenu slot="menu" direction="rtl" width="250">
                            <DropdownMenuItem
                                as="button"
                                @click.prevent="createPartialBackup('only-db')"
                            >
                                {{ __('Create database backup') }}
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                as="button"
                                @click.prevent="createPartialBackup('only-files')"
                            >
                                {{ __('Create files backup') }}
                            </DropdownMenuItem>
                        </DropdownMenu>
                    </template>
                </Dropdown>

                <Button variant="solid" @click="createBackup">
                    {{ __('Create Backup') }}
                </Button>
            </div>
        </div>

        <LoadingCard :loading="loading" class="mb-6">
            <div class="overflow-hidden overflow-x-auto relative rounded-lg">
                <backup-statuses :backup-statuses="backupStatuses" />
            </div>
        </LoadingCard>

        <LoadingCard :loading="loading">
            <backups
                v-if="activeDisk"
                :disks="disks"
                :backups="activeDiskBackups"
                :active-disk.sync="activeDisk"
                @delete="deleteBackup"
                @setModalVisibility="setModalVisibility"
            />
        </LoadingCard>
    </LoadingView>
</template>

<script>
import api from '../api';
import Backups from '../components/Backups';
import BackupStatuses from '../components/BackupStatuses';
import { Button, Icon } from 'laravel-nova-ui';

export default {
    inheritAttrs: false,
    components: {
        Backups,
        BackupStatuses,
        Button,
        Icon,
    },

    computed: {
        disks() {
            return this.backupStatuses.map(backupStatus => backupStatus.disk);
        },
    },

    data: () => ({
        activeDisk: null,
        activeDiskBackups: [],
        backupStatuses: [],
        initialLoading: true,
        modalVisibility: false,
        loading: true,
        poller: null,
    }),

    async created() {
        this.initialLoading = false;

        await this.updateBackupStatuses();
        await this.updateActiveDiskBackups();

        this.loading = false;

        this.startPolling();
    },

    beforeUnmount() {
        if (this.poller) {
            window.clearInterval(this.poller);
        }
    },

    methods: {
        updateBackupStatuses() {
            return api.getBackupStatuses().then(backupStatuses => {
                this.backupStatuses = backupStatuses;

                if (!this.activeDisk) {
                    this.activeDisk = backupStatuses[0].disk;
                }
            });
        },

        updateActiveDiskBackups() {
            if (!this.activeDisk) {
                return;
            }

            return api.getBackups(this.activeDisk).then(backups => {
                this.activeDiskBackups = backups;
            });
        },

        createBackup() {
            Nova.success(this.__('Creating a new backup in the background...'));

            return api.createBackup();
        },

        createPartialBackup(option) {
            Nova.success(
                this.__('Creating a new backup in the background...') + ' (' + option + ')'
            );

            return api.createPartialBackup(option);
        },

        deleteBackup({ disk, path }) {
            return api.deleteBackup({ disk, path });
        },

        startPolling() {
            if (Nova.config('nova_backup_tool').polling) {
                this.poller = window.setInterval(() => {
                    if (!this.modalVisibility) {
                        this.updateBackupStatuses();
                        this.updateActiveDiskBackups();
                    }
                }, Nova.config('nova_backup_tool').polling_interval * 1000);
            }
        },

        setModalVisibility(state) {
            this.modalVisibility = state;
        },
    },
};
</script>
