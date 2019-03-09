<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form v-on:submit.prevent="!editeinput ? updatedata(): postData()">
            <div class="form-group">
              <label for>Enter Quotes</label>
              <input type="text" v-model="data.content" class="form-control" placeholder="Quotes">
            </div>
            <div class="form-group">
              <input type="submit" value="POST" class="btn btn-primary">
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <ul class="list">
            <ol v-for="(item, index) in quotes" :key="index" class="list-item">
              {{item.content}}
              <div
                style="cursor: pointer;"
                v-on:click="editeData(item.id,item.content)"
                class="float-right"
              >Edit</div>
            </ol>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      quotes: {},
      data: {
        id: "",
        content: ""
      },
      dataEdit: {
        id: "",
        content: ""
      },
      editeinput: false
    };
  },
  methods: {
    editeData(id, content) {
      this.editeinput = true;
      this.data.id = id;
      this.data.content = content;
    },
    updatedata(id) {
      axios
        .put("http://127.0.0.1:8000/api/quote/" + id, this.data)
        .then(response => {
          console.log(this.data);
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    postData() {
      axios
        .post("http://127.0.0.1:8000/api/quote")
        .then(response => {
          this.loadQuotes();
          this.data.content = "";
        })
        .catch(e => {
          alert("quote can not be blank");
        });
    },
    loadQuotes() {
      axios
        .get("http://127.0.0.1:8000/api/quotes")
        .then(({ data }) => {
          this.quotes = data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/quotes")
      .then(({ data }) => {
        this.quotes = data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>
</style>
