export {}

import typescript from '@rollup/plugin-typescript';

export default {
  // ...
  plugins: [typescript(), /* Other plugins */],
};
async function fun() { 
    const url: string = 'https://fwd.innopolis.app/api/hw2?email=i.mirzazhanov@innopolis.university';
    const response: Response = await fetch(url);
    const commits: string = await response.text();

    const xkcd_url: string = 'https://getxkcd.vercel.app/api/comic?num=';
    const img_url: string = xkcd_url + commits;

    const img_resp: Response = await fetch(img_url);
    const text_test: string = await img_resp.text();
    const obj: { [key: string]: string} = JSON.parse(text_test);

    const image: HTMLImageElement = document.getElementById("comic_im") as HTMLImageElement;
    image.src = obj.img;

    const dis: HTMLParagraphElement = document.getElementById("disc")!.firstChild as HTMLParagraphElement;
    const dis_data: string = `${obj.safe_title}. ${obj.alt} \n${obj.month} ${obj.year}`;
    dis.dataset.data = dis_data;
}