class GitHub { 
  constructor(){ 
    this.client_id = 'a6d42efda965570762c9';
    this.client_secret = '7ef7db629e0bcde386bc62d96101a054b90ec943'; 
  }


  async getUser(user){ 
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json(); 

    return { 
      profile   //No need for the second if using ES6 profile: profile.
    }
  }
}