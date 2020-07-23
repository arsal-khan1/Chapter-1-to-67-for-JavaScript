var app = new function() {

    this.el = document.getElementById('students');
  
    this.students = ['Arsal', 'Ashar', 'Asfar'];
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'student';
  
      if (data) {
        if (data > 1) {
          name = 'students';
        }
        el.innerHTML = data + ' ' + name ;
      } else {
        el.innerHTML = 'No ' + name;
      }
    };
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.students.length > 0) {
        for (i = 0; i < this.students.length; i++) {
          data += '<tr>';
          data += '<td>' + this.students[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.students.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-name');
      
      var studentss = el.value;
  
      if (studentss) {
        
        this.students.push(studentss.trim());
        
        el.value = '';
        
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-name');
      
      el.value = this.students[item];
      
      document.getElementById('spoiler').style.display = 'block';
      self = this;
  
      document.getElementById('saveEdit').onsubmit = function() {
        
        var studentss = el.value;
  
        if (studentss) {
          
          self.students.splice(item, 1, studentss.trim());
          
          self.FetchAll();
          
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      
      this.students.splice(item, 1);
      
      this.FetchAll();
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
  }