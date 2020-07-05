<template>
   <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Blog </h3>

                <div class="card-tools">
                <div class="btn-group">
                                    <a href="" id="addRow"
                               class="btn btn-info" data-toggle="modal" data-target="#addBlog" style="margin-top: 10px;">
                                Add New  <i class="fa fa-plus"></i>
                                                        </a>

</button>


                                                    </div>
                                  </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover ">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Blog Title</th>
                      
                      <th>Action</th>
                      
                    </tr>
                  </thead>
                                <tbody>
                 
                    <tr v-for= "blog in blogs" :key="blog.id" >
                      <td>{{blog.id}}</td>
                      <td>{{blog.title}}</td>
                      
                      
                      <td>

                                                <a href="" class="btn btn-dark waves-effect waves-light"> <i class="fa fa-pencil"> Edit</i> </a>
                                                <a  href="javascript:" rel="" rel1="" class="btn btn-danger waves-effect waves-light deleteRecord">Delete <i class="fa fa fa-trash-o"></i> </a>
                                                 <a href="" class="btn btn-dark waves-effect waves-light"> <i class="fa fa-eye">Blog Show</i> </a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <div class="modal fade" id="addBlog" tabindex="-1" role="dialog" aria-labelledby="AddNewLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="AddNewLabel">Add New</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="createBlogs">
      <div class="modal-body">
      <div class="form-group">
      <input v-model="form.title" type="text" name="title" placeholder="Title"
        class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
      <has-error :form="form" field="title"></has-error>
    </div>
     
      <div class="form-group">
      <input v-on="form.image" type="file" name="image" placeholder="Image"
        class="form-control" :class="{ 'is-invalid': form.errors.has('image') }">
      <has-error :form="form" field="image"></has-error>
    </div>
      

      <div class="form-group">
      <input v-model="form.content" type="text" name="content" placeholder="Content"
        class="form-control" :class="{ 'is-invalid': form.errors.has('content') }">
      <has-error :form="form" field="content"></has-error>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save </button>
      </div>

      </form>
    </div>
  </div>
</div>
        </div>
</template>

<script>
    export default {
    data(){
    return{

    blogs:{},

    form:new Form({
    title:'',
    image:'',
    content:''
     })
    }
    },
    methods:{
    loadBlog(){
       axios.get("api/blog ").then(({ data }) => ( this.blogs=data.data));

    },
    createBlogs(){
     this.$Progress.start()
    this.form.post('api/blog ');
    $('#addBlog').modal('hide');

    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Blogs  Added Successfully',
  showConfirmButton: false,
  timer: 1500
     })
    this.$Progress.finish();
        

    }
    },
    created(){
    this.loadBlog();
    }
    
      }
</script>