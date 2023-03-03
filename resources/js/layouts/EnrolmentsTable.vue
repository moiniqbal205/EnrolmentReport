<template>
    <div>
        <vs-table :data="enrolments">
            <template slot="header">
                <h5>Enrolments</h5>
            </template>
            <template slot="thead">
                <vs-th> Course </vs-th>
                <vs-th> Status </vs-th>
            </template>

            <template slot-scope="{ data }">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                        {{ tr.course.description }}
                    </vs-td>
                    <vs-td>
                        {{ tr.completion_status }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </div>
</template>

<script>
export default {
    name: 'enrolments-table',
    props: ['enrolments']
}
</script>

<style></style>
