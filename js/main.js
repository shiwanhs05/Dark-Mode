const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const toggleBtn = document.querySelector('.btn');
const articlesContainer  = document.querySelector('.articles');
toggleBtn.addEventListener('click', ()=>
{
  // document.body.classList.toggle('dark-theme');
  document.documentElement.classList.toggle('dark-theme');
});
const articlesData = articles.map((article)=> 
{ 
  const {title, date, length, snippet} = article;
  return `<article class="post">
  <h2>${title}</h2>
  <div class="post-info">
    <span>${months[date.getMonth()]} ${date.getDate()}th ${date.getFullYear()}</span>
    <span>${length} min read</span>
  </div>
  <p>${snippet}</p>
  </article>`;
}).join('');
articlesContainer.innerHTML = articlesData;
