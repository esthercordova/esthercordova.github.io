# My Story: Esther Pia Cordova

## 1 About Me

### My background

I came to America during my master degree for an exchange semester. Here, in Boston, I met the love of my life, Brad. In order to stay together, I extended my stay for an additional semester and wrote my master thesis. After 6 months we decided that we wanted to give whatever we had a chance and got married on a beach in Florida. One of the hardest decisions I ever had to make. I am very happy that I decided that way since it was the best decision of my life.  We are staying in Boston since Brad has started its own tech company here.

I have a master degree in “International Food Business” and apparently Boston is not a hotspot for this industry. I did know that, but I didn’t know that it would become so difficult. Finding positions, which I would love was basically impossible. When I found a position I mostly got no answers. In comparison to my home base Germany, I have no business network here. One time a human resource manager told me on the phone, that it wasn’t about me or my skillset they simply thought it would be too dangerous to hire me since nobody knows me and they had a candidate whom they worked with before.

I love going to yoga and the gym, I babysitte and tutor. Next to that I volunteer in the local animal shelter and I am a crisis textline counselor. Especially the weekly crisis textline shift is very rewarding for me. But all that above is simply not enough. After a year of trying I need to try something new since this situation is not only taking its troll on me, but furthermore on my relationship.

### Why I want to attend Launch Academy

I need **more challenges**, **feel responsible** and **have a goal**. My husband tells me already a long time that I should try learning programming. But it is so damn scary. He knows that I can do it and slowly I start to believe it myself. Its scary to leave my food background behind, since I am very good in it and I also spent a lot of time creating these skills. Skills, which are useless in Boston.

 A while ago I started with the help of Brad my own foodblog (feelinfood.com). I think it looks amazing and I can’t believe I did this. Feelinfood is done with wordpress, so that there is no real programming involved but this was the first step to make me feel a little bit more comfortable to start my actual journey. 

I would **love to be able to become a web developer** and **to contribute** to a team. I would like to have a **meaningful position** to build some of the **self-worth** up, which I lost after being unemployed for quite a while. 

### What I did so far

My journey started with Code School and Code Academy, which I enjoyed, especially the HTML and CSS part. Learning JavaScript with online resources is very hard so I am currently doing a course at StartUp Institute, with a real person, whom I can ask questions. I am learning a lot every week. Next to that I take an online blueprint from skillcrush in which I am learning to deal with wordpress, php, Git and GitHub. We looked into bootcamps but that is just simply not affordable for us. So I got all excited, when I saw the coding challenge form you. This could be a real chance for me.

### Your challenge

The challenge was such a fun and nerve wracking experience. It’s **incredible**; I didn’t expect to get emotionally about programming. Thanks for that. Sometimes I hated it and got so desperate because nothing worked, but then suddenly something worked and it is such a **blissful feeling**. It’s amazing to see that something I did actually works. I still believe that programming is somehow magical and I am not made for it, especially as a woman.
But heck, maybe I can make myself to be made for it, if I work hard enough. I am ready to work hard and it would mean a lot if you guys could help me on my journey.

## 2 About My Super Cool Program

I am very proud to present my program: ENCODE (and DECODING) THE SECRETS to you. It’s capable of decrypting and encrypting messages. Next to providing a single file with all the code necessary to run the fun, I also wanted to provide a webpage, which is easier to use, looks better and contains next to all functions also a small about page with additional information about me. You can find the webpage at http://esthercordova.github.io use the password: “LaunchFun” (without the quotes).

### What ENCODE THE SECRETS is capable of
is processing all four levels (Sergeant, Major, Colonel and General). All supplied examples give exact the desired outputs. Program takes an encoded string (secret message) & returns a decrypted message:

* using words found in dictionary,
* spelling words not found in the dictionary,
* and using cipher to encode numbers.

In addition, the program can also take a decoded string and encode the message for you. It uses the same dictionary and spelling ciphers from the decrypt method. It also uses

* a `~` character to indicate that a word variants from the dictionary.

### Limitations of ENCODE THE SECRETS
* can’t handle special characters (@#$!%^&*+ etc.)
* the encrypted method can’t handle:
 * messages which contain more then one space between words
 * encrypt method can’t handle words with capital letters  undefined
 * word variants are market with a `~` character if word root of at least 4 letters is the same e.g.
    * detected will be detect as detect (~142) since the first 6 letters are the same, but
    * eyes won’t be detected as eye since the root is only the same for 3 letters eyes will be decrypted letter by letter
  
I decided for having at least 4 letters the same since otherwise the program delivers a lot of wrong positives. Instead of `~` the words will be decrypted letter by letter.
