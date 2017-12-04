function getProfileLink (username)
{
    return 'https://github.com/' + username
}

function getProfilePic (username)
{
    return 'https://github.com/' + username + '.png?size=200'
}


function getProfileData (username)
{
    return {
        pic: getProfilePic(username),
        link: getProfileLink(username)
    }
}

var profData = getProfileData('cboutiette');

alert(profData);

