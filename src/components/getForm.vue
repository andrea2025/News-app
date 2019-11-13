<template>
  <div class="container">
    <h2 class="text-center">News Headlines</h2>
    
    <div class="row">
      <div v-for="(item,index) in newData" :key="index" class="col-5">
        <div class="bg-secondary my-auto">
          <a :href="item.url">
            <div>
              <img :src="item.urlToImage" :alt="item.title" class="images" />
            </div>
          </a>

          <h3>
            <a :href="item.url">{{item.title}}</a>
          </h3>
          <div>
            <p class="author">{{item.author}}</p>
          </div>
          <div>
            <p class="cont">{{item.content}}</p>
          </div>
          <div>
            <p class="pub">{{item.publishedAt}}</p>
          </div>
          <div>
            <p>{{item.url}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "getForm",
  data() {
    return {
      newData: []
    };
  },
  mounted() {
    this.$http
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=b6688556cb7b42efa04219bdebd3e933"
      )
      .then(response => {
        this.newData = response.data.articles;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style scoped>
h4 {
  color: maroon;
  background: gray;
}
.author {
  color: white;
  font-style: italic;
  font-weight: bolder;
}
.cont {
  color: white;
}
.pub {
  color: rgba(224, 12, 12, 0.849);
  font-weight: bolder;
}
img {
  height: auto;
  width: 70%;
}
a{
    text-decoration:none;

}
</style>