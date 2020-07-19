const postContainer = document.querySelector('.post-container');
const loading = document.querySelector('.loader');
const filter = document.querySelector("#filter");

const limit = 5;
let page = 1;

// Fetch Post from api
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();
  return data;
}

// Show Posts in DOM
async function showPosts() {
  const posts = await getPosts();
  // console.log(posts)

  posts.forEach((post) => {
    const postEl = document.createElement("div"); 
    // postEl.className='post';  This can be used
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    postContainer.appendChild(postEl);
  });
  
}

// Show loading and fetch more posts
function showLoading() {
  loading.classList.add('show'); 

  setTimeout(function(){
    loading.classList.remove('show');
    // page++;
    // showPosts();
    setTimeout(function(){
      page++;
      showPosts();
    },300)
  },1000)
}

// Filter Posts by input
function filterPosts(e){
  const inputValue=e.target.value.toLowerCase();
  const posts=document.querySelectorAll('.post');
  // console.log(inputValue,posts);
  posts.forEach(post=>{
    const title = post.querySelector('.post-title').innerText.toLowerCase();
    const body=post.querySelector('.post-body').innerText.toLowerCase();
    if(title.indexOf(inputValue) > -1 || body.indexOf(inputValue) > -1){
      post.style.display='flex';
    }else{
      post.style.display='none';
    }
  })
}

// Show initial posts
showPosts();

// Scroll Event
window.addEventListener('scroll',()=>{
  const {scrollTop, scrollHeight, clientHeight}=document.documentElement;
  if(scrollTop + clientHeight >=scrollHeight-5){
    showLoading();
    // console.log(scrollTop,scrollHeight,clientHeight)
    // scrollTop+clientHeight = scrollHeight Always
  }
 
})

filter.addEventListener('input',filterPosts);

