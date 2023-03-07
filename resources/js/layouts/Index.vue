<template>
    <div class="container p-4">
        <vs-row><h3>Student Enrolment Page</h3></vs-row>
        <vs-table search pagination :max-items="maxItems" :data="users" stripe>
            <template slot="header">
                <vs-select label="Page Options" v-model="maxItems">
                    <vs-select-item
                        :key="index"
                        :value="item"
                        :text="item"
                        v-for="(item, index) in paginationOptions"
                    />
                </vs-select>
            </template>
            <template slot="thead">
                <vs-th sort-key="name"> Name </vs-th>
                <vs-th sort-key="email"> Email </vs-th>
            </template>

            <template slot-scope="{ data }">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].first_name">
                        {{ data[indextr].first_name }} {{ data[indextr].last_name }}
                    </vs-td>

                    <vs-td :data="data[indextr].email">
                        {{ data[indextr].email }}
                    </vs-td>

                    <template slot="expand">
                        <div v-if="tr.enrolments.length > 0">
                            <enrolments-table :enrolments="tr.enrolments" />
                        </div>
                        <div v-else>No enrolment data available</div>
                    </template>
                </vs-tr>
            </template>
        </vs-table>

        <pre ref="pre"></pre>
    </div>
</template>

<script>
import EnrolmentsTable from './EnrolmentsTable.vue'

export default {
    name: 'index',
    components: { EnrolmentsTable },
    data() {
        return {
            users: [],
            defaultMaxItems: 10,
            paginationOptions: ['10', '15', '20', '25']
        }
    },
    computed: {
        maxItems: {
            get() {
                return this.defaultMaxItems
            },
            set(val) {
                this.defaultMaxItems = val
            }
        }
    },
    async mounted() {
        var response = await this.$api.get('/users')
        this.users = response.data
    }
}
</script>

<style scoped></style>
