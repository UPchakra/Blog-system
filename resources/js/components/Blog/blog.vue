<template>
   <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Blog Category</h3>

                <div class="card-tools">
                <div class="btn-group">
                                    <a href="" id="addRow"
                               class="btn btn-info" data-toggle="modal" data-target="#addNew" style="margin-top: 10px;">
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
                      <th>Name</th>
                      <th>Remarks</th>
                      <th>Action</th>
                      
                    </tr>
                  </thead>
                                <tbody>
                 
                    <tr v-for= "blogcategory in blog_categories" :key="blogcategory.id" >
                      <td>{{blogcategory.id}}</td>
                      <td>{{blogcategory.name}}</td>
                      <td>{{blogcategory.remarks}}</td>
                      
                      <td>

                                                <a href="" class="btn btn-dark waves-effect waves-light"> <i class="fa fa-pencil"> Edit</i> </a>
                                                <a  href="javascript:" rel="" rel1="" class="btn btn-danger waves-effect waves-light deleteRecord">Delete <i class="fa fa fa-trash-o"></i> </a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="AddNewLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="AddNewLabel">Add New</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="createBlogcat">
      <div class="modal-body">
      <div class="form-group">
      <input v-model="form.name" type="text" name="name" placeholder="Name"
        class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
      <has-error :form="form" field="name"></has-error>
    </div>
     <div class="form-group">
      <input v-model="form.remarks" type="text" name="remarks" placeholder="Remarks"
        class="form-control" :class="{ 'is-invalid': form.errors.has('remarks') }">
      <has-error :form="form" field="remarks"></has-error>
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

    blog_categories:{},

    form:new Form({
    name:'',
    remarks:''
    })
    }
    },
    methods:{
    loadBlogcat(){
       axios.get("api/blogcategory").then(({ data }) => ( this.blog_categories=data.data));

    },
    createBlogcat(){
     this.$Progress.start()
    this.form.post('api/blogcategory');
    $('#addNew').modal('hide');

    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Blog Category Added Successfully',
  showConfirmButton: false,
  timer: 1500
     })
    this.$Progress.finish();
        

    }
    },
    created(){
    this.loadBlogcat();
    }
    
      }
</script>