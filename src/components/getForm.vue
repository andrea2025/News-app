<template>
  <div class="container-fluid">
    <!-- <h2 class="text-center">News Headlines</h2> -->
    <form>
      <div>
        <div>
          <label for="">Country</label>
        </div>
        <select name="#" v-model="country" class="bg-light">
          <option value="ng">Nigeria</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="jp">Japan</option>
          <option value="nz">New zeland</option>
          <option value="us">United state</option>
        </select>
      </div>
      <div>
        <div>
          <label for="">Category</label>
        </div>
        <select name="#" v-model="category" class="bg-light">
          <option value="health">Health</option>
          <option value="sport">Sport</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button type="button" class="btn-danger mt-3 px-4 py-2 rounded-pill" @click="updateNews">More News</button>
    </form>

    <div class="row">
      <div v-for="(item,index) in newData" :key="index" class="col-6">
        <div class="bg-white my-auto">
          <a :href="item.url">
            <div>
              <img :src="item.urlToImage" :alt="item.title" class="images" />
            </div>
          </a>

          <h4 class="pt-3">
            <a :href="item.url">{{item.title}}</a>
          </h4>
          <div>
            <p class="author">{{item.author}}</p>
          </div>
          <div>
            <p class="cont">{{item.description}}</p>
          </div>
          <!-- <div>
            <p class="pub">{{item.publishedAt}}</p>
          </div> -->
          <!-- <div>
            <p>{{item.url}}</p>
          </div>-->
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
      newData: [],
       country: "",
      category: ""
    };
  },
  methods: {
    updateNews() {
      var urLink = "https://newsapi.org/v2/top-headlines?country=";
      var ctr = this.country;
      var u = "&category=";
      var y = this.category;
      var x = "&apiKey=360e9255e3ce425881637a308ecf0632";
      var z = urLink + ctr + u + y + x;
      this.$http.get(z).then(response => {
        this.newData = response.data.articles
      });
    }
  }
};
</script>
<style scoped>
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
  width: 80%;
}
a {
  text-decoration: none;
  color: maroon;
}
select{
  width:60%;
  padding:0.5rem;
}
</style>