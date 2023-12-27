class GitHub {
    constructor() {
        this.client_id = ''
        this.cliente_secret = ''
        this.repos_count = 5;
        this.repos_sort = ''
    }

    //원래는 동기. 브라우저의 도움 fetch 를 이용하여 비동기 처리.
    async getUser(user) {
        const profileResponse = await fetch('https://api.github.com/users/${user}?client_id=$')
        console.log(profileResponse);
        //비동기지만 동기처럼 처리를 해줘야 되거든요? await

        const repoResponse = await fetch('https://api.github.com/users/${user}/repos?per_page=${this.repos_count}')
        console.log(repoResponse);

        const profile = await profileResponse.json();
        const repose = await repoResponse.json();

        return {
            profile,
            repos: repos
        }
    }


}       