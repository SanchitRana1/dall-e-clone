import FileSaver from "file-saver";
import {POST_URL, surpriseMePrompts} from "../constants"

export const getRandomPrompts = (prompt) => {
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt===prompt) return getRandomPrompts(prompt)
  return randomPrompt;
}
export async function downloadImage(_id,photo){
  // const response = await fetch(photo, { mode: 'cors' });
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }
  // const blob = await response.blob();
  // console.log(blob);
  // FileSaver.saveAs(photo,`download-${_id}.jpg`)
  // try {
  //   // Using CORS Anywhere as the proxy
  //   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  //   const response = await fetch(proxyUrl + photo, { mode: 'cors' });
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   const blob = await response.blob();
  //   console.log(blob)
  //   // FileSaver.saveAs(blob, `download-${_id}.jpg`);
  // } catch (error) {
  //   console.error('Error downloading the image:', error);
  // }


  try {
    const proxyUrl = `${POST_URL}/download?url=${encodeURIComponent(photo)}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    const fileType = response.headers.get('content-type') || 'image/jpeg';
    const file = new Blob([blob], { type: fileType });
    FileSaver.saveAs(file, `download-${_id}.jpg`);
  } catch (error) {
    console.error('Error downloading the image:', error);
  }
}