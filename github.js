class GitHub { 
  constructor(){ 
    this.client_id = 'a6d42efda965570762c9';
    this.client_secret = '7ef7db629e0bcde386bc62d96101a054b90ec943';
    this.repos_count = 5; 
    this.repos_sort = 'created: asc';
  }


  async getUser(user){ 
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json()

    return { 
      profile,   //No need for the second if using ES6 profile: profile.
      repos
    }
  }
}