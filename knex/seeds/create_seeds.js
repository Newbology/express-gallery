
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gallery').del()
    .then(function () {
      // Inserts seed entries
      return knex('gallery').insert([
        { 
          url: 'https://www.google.com/search?tbm=isch&q=bears&chips=q:bears,g_1:grizzly:cc-uz0mwGL4%3D&usg=AI4_-kQowtVeX6OGE4oghutu4_fPdMx8zw&sa=X&ved=0ahUKEwj6g-y0hajgAhUTBHwKHdz6B5YQ4lYILCgC&biw=1920&bih=970&dpr=1#imgrc=K7BDjOtf4TRjVM:',
          author: 'New York Post',
          body: "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out."
        },
        {
          url: 'https://www.google.com/search?tbm=isch&q=bears&chips=q:bears,g_1:grizzly:cc-uz0mwGL4%3D&usg=AI4_-kQowtVeX6OGE4oghutu4_fPdMx8zw&sa=X&ved=0ahUKEwj6g-y0hajgAhUTBHwKHdz6B5YQ4lYILCgC&biw=1920&bih=970&dpr=1#imgrc=CyU2juQzZtK-SM:',
          author: 'Field & Stream',
          body: "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit?"
        },
        {
          url:'https://www.google.com/search?tbm=isch&q=bears&chips=q:bears,g_1:grizzly:cc-uz0mwGL4%3D&usg=AI4_-kQowtVeX6OGE4oghutu4_fPdMx8zw&sa=X&ved=0ahUKEwj6g-y0hajgAhUTBHwKHdz6B5YQ4lYILCgC&biw=1920&bih=970&dpr=1#imgrc=03fd8ffVqjxSbM:',
          author: 'Defenders of wildlife',
          body: "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
        },
        {
          url: 'https://www.google.com/search?tbm=isch&q=bears&chips=q:bears,g_1:grizzly:cc-uz0mwGL4%3D&usg=AI4_-kQowtVeX6OGE4oghutu4_fPdMx8zw&sa=X&ved=0ahUKEwj6g-y0hajgAhUTBHwKHdz6B5YQ4lYILCgC&biw=1920&bih=970&dpr=1#imgrc=Hvf5G_hvhXWb9M:',
          author: 'National Wildlife Federation',
          body : "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water."
        },
        {
          url: 'https://www.google.com/search?tbm=isch&q=bears&chips=q:bears,g_1:grizzly:cc-uz0mwGL4%3D&usg=AI4_-kQowtVeX6OGE4oghutu4_fPdMx8zw&sa=X&ved=0ahUKEwj6g-y0hajgAhUTBHwKHdz6B5YQ4lYILCgC&biw=1920&bih=970&dpr=1#imgrc=NTOTOtbhyxy69M:',
          author: 'Center for Biological Diversity',
          body: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you."
        },
        {
          url:'https://www.google.com/search?tbm=isch&q=bears&chips=q:bears,g_1:grizzly:cc-uz0mwGL4%3D&usg=AI4_-kQowtVeX6OGE4oghutu4_fPdMx8zw&sa=X&ved=0ahUKEwj6g-y0hajgAhUTBHwKHdz6B5YQ4lYILCgC&biw=1920&bih=970&dpr=1#imgrc=1mtPXu3iEulnPM:',
          author: 'Adorama',
          body: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero."
        },
        {
          url: 'https://www.google.com/search?tbm=isch&q=bears&chips=q:bears,g_1:grizzly:cc-uz0mwGL4%3D&usg=AI4_-kQowtVeX6OGE4oghutu4_fPdMx8zw&sa=X&ved=0ahUKEwj6g-y0hajgAhUTBHwKHdz6B5YQ4lYILCgC&biw=1920&bih=970&dpr=1#imgrc=4HcuArkTMpZE8M:',
          author: 'Jonathan Bowers',
          body: "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there."
        }
      ]);
    });
};
