class GitHub {
    constructor() {
        this.client_id = '7a565794f66aae6fdd8b';
        this.client_secret = '2d465b6be93329287dcd5b8703f8d6937c1cb43d';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api/github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}