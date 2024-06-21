import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

const question = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter the URL:'
    }
];

inquirer.prompt(question).then((answers) => {
    const userUrl = answers.url;
    console.log(`User entered URL: ${userUrl}`);

    var qr_png = qr.image(userUrl);
    qr_png.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile('url.txt', userUrl , (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 

});
