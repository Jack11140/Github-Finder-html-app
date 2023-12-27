class UI {
    //this ?? 클래스를 만든이유? 함수로 해도 상관은 없다. 여기선 클래스
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = '
        <div>
        안녕하세요.
        </div>
        
        
        '

    }


    //repo객체
    showRepos (repos) {
        let output = '';

        repos.forEach(repo) => {
            output += '
            //copy and paste
            
            '
        }}


        document.getElementById('repos').innerHTML = output;
        
}