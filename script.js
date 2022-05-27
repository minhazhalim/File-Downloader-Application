const input = document.querySelector('input');
const button = document.querySelector('button');
function file(url){
     fetch(url).then(response => response.blob()).then(files => {
          let temporaryUrl = URL.createObjectURL(files);
          const anchor = document.createElement('a');
          anchor.href = temporaryUrl;
          anchor.download = url.replace(/^.*[\\\/]/,'');
          document.body.appendChild(anchor);
          anchor.click();
          button.innerText = 'Download File';
          URL.revokeObjectURL(temporaryUrl);
          anchor.remove();
     }).catch(() => {
          alert('Failed to Download File');
          button.innerText = 'Download File';
     });
}
button.addEventListener('click',event => {
     event.preventDefault();
     button.innerText = 'Downloading File.....';
     file(input.value);
});