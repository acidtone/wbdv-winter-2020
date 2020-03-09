fetch(`${window.location.href}api/v1/definitions`)
.then((response) => {
  return response.json();
})
.then((data) => {
  const dl = document.querySelector('dl');
  const template = document.querySelector('template');
  data.forEach(function(item){
    let clone = template.content.cloneNode(true);
    clone.querySelector('a').innerText = item.term;
    clone.querySelector('a').setAttribute('href',`/definitions/${item.slug}`);
    clone.querySelector('dd').innerText = item.definition;
    dl.appendChild(clone);
  })
});