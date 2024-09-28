var imgs;

imgs = [
  "https://media.gettyimages.com/id/141555146/photo/a-street-in-asmara.jpg?s=612x612&w=gi&k=20&c=YjpIaLASTVNkJoE9evuRgk6AJ9tDAP-x_ldfmx5HkzY=",
  "https://media.gettyimages.com/id/640238161/photo/enda-mariam-coptic-cathedral-asmara.jpg?s=612x612&w=gi&k=20&c=392og58ICA702gAO5Y97g6VhcbBOxMBSGuiLHRS7rZ8=",
  "https://media.gettyimages.com/id/1493191543/photo/eritrean-man-sit-on-the-grand-mosque-kulafa-al-rashidin-esplanade-central-region-asmara.jpg?s=612x612&w=gi&k=20&c=GNDEAHQQm_a5GGYT2RvNWngzzcSTziYBKKyqcAOxx54="
];


let element_cimg = document.getElementById('cimg');
element_cimg.setAttribute("src", imgs[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_cimg2 = document.getElementById('cimg');
  imgs.push(imgs[0]);
  imgs.shift();
  let element_cimg3 = document.getElementById('cimg');
  element_cimg3.setAttribute("src", imgs[0]);

});

document.getElementById('pre').addEventListener('click', (event) => {
  let element_cimg4 = document.getElementById('cimg');
  imgs.unshift(imgs.slice(-1)[0]);
  imgs.pop();
  let element_cimg5 = document.getElementById('cimg');
  element_cimg5.setAttribute("src", imgs[0]);

});