export class SampleService1 {
    private totalUsersLength: number;
    private users: [];

    constructor(users: []) {
        this.totalUsersLength = users.length;
        this.users = users;
    }

    getUsers() {
        return this.users;
    }

    getUser(id: string) {
        return this.users.find(user => user === id);
    }

    getUsersCount() {
        return this.totalUsersLength;
    }
}
