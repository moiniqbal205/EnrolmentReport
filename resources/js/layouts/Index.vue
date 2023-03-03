<template>
    <div class="container">
        <vs-table
            :sst="true"
            @search="handleSearch"
            @change-page="handleChangePage"
            @sort="handleSort"
            v-model="selected"
            :total="totalItems"
            max-items="3"
            search
            :data="users"
            stripe
        >
            <template slot="header">
                <h3>Users</h3>
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

                    <!-- <li>COURSE: {{ enrolment.course.description }}</li> -->
                    <template slot="expand">
                        <div v-if="tr.enrolments.length > 0">
                            <enrolments-table :enrolments="tr.enrolments" />

                            <!-- <ul v-for="enrolment in tr.enrolments" :key="enrolment.id">
                                <li>
                                    {{ enrolment.id }}
                                    <div>
                                        STATUS: {{ enrolment.completion_status }} <br />
                                        STATUS: {{ enrolment.completion_status }} <br />
                                        STATUS: {{ enrolment.completion_status }} <br />
                                    </div>
                                </li>
                            </ul> -->
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
            selected: [],
            totalItems: 10,
            users: [],
            search: ''
        }
    },
    computed: {
        filteredList() {
            if (this.search) {
                return this.users.filter((user) => {
                    return user.first_name.toLowerCase().includes(this.search.toLowerCase())
                })
            }

            return this.users
        }
    },
    methods: {
        handleSearch(searching) {
            this.search = searching

            // let _print = `The user searched for: ${searching}\n`
            // this.$refs.pre.appendChild(document.createTextNode(_print))
        },
        handleChangePage(page) {
            let _print = `The user changed the page to: ${page}\n`
            this.$refs.pre.appendChild(document.createTextNode(_print))
        },
        handleSort(key, active) {
            let _print = `the user ordered: ${key} ${active}\n`
            this.$refs.pre.appendChild(document.createTextNode(_print))
        }
    },
    async mounted() {
        var response = await this.$api.get('/users')
        console.log(response.data)
        this.users = response.data
    }
}
</script>

<style scoped></style>
