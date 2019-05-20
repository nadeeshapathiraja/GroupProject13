/**
 * Definitions for DB models related functions.
 * Backend-Controller will call to here and this will call to Utils.
 **/

/* ---------  REQUIRES   -----------*/
var mysql = require('mysql');
var Utils = require('../util/utils');
var DB = require('../config/database.config');


/* -----  CONFIGURATION DATABASE   -------*/
var connection = mysql.createConnection(DB);


function DatabaseMySql() { }

/* ---------  DATABASE - METHODS   -----------*/

// User Model related functions ................................................................
// get user object by user name
DatabaseMySql.prototype.getUser = function (userName, callback) {

  var utils = new Utils();

  var sqlSelectUser = utils.getSqlSelectUser(userName);

  connection.query(sqlSelectUser, function (err, resultUser) {
    if (err || resultUser.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateUser(resultUser[0]));
    }
  });
}

// insert user object to DB
DatabaseMySql.prototype.insertUser = function (user, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUser = utils.getInsertSqlUser(user);

    /* -- Start insert User -- */
    insertSql(sqlUser, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback(user.userName);
        });
      }
    });
  });
}

// update user object in DB
DatabaseMySql.prototype.updateUser = function (user, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateUser = utils.getUpdateSqlUser(user);

    /* -- Start update User -- */
    insertSql(sqlUpdateUser, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("User successfully updated in the system!");
        });
      }
    });
  });
}
//delete user

DatabaseMySql.prototype.deleteUser = function (user, callback) {

  var utils = new Utils();

  var sqldeleteuser = utils.getSqlDeleteUser(user);

  connection.query(sqldeleteuser, function (err, resultUser) {
    if (err || resultUser.length == 0) {
      callback(null, err);
    } else {
      callback(resultUser);
    }
  });
}


// Student Model related functions ..............................................................

// get students' objects
DatabaseMySql.prototype.getStudents = function (callback) {

  var utils = new Utils();

  var sqlSelectAllStudents = utils.getSqlSelectAllStudents();

  connection.query(sqlSelectAllStudents, function (err, resultStudent) {
    if (err || resultStudent.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultStudent[i]) {
        resCom.push(utils.generateStudent(resultStudent[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get student object by student id
DatabaseMySql.prototype.getStudent = function (studentId, callback) {

  var utils = new Utils();

  var sqlSelectStudent = utils.getSqlSelectStudent(studentId);

  connection.query(sqlSelectStudent, function (err, resultStudent) {
    if (err || resultStudent.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateStudent(resultStudent[0]));
    }
  });
}

// get student object by first name
DatabaseMySql.prototype.getStudentByFname = function (studentFname, callback) {

  var utils = new Utils();

  var sqlSelectStudent = utils.getSqlSelectStudentByFname(studentFname);

  connection.query(sqlSelectStudent, function (err, resultStudent) {
    if (err || resultStudent.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateStudent(resultStudent[0]));
    }
  });
}

// insert student object to DB
DatabaseMySql.prototype.insertStudent = function (student, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertStudent = utils.getInsertSqlStudent(student);

    /* -- Start insert Student -- */
    insertSql(sqlInsertStudent, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Student successfully inserted into the system!");
        });
      }
    });
  });
}

//Delete student

DatabaseMySql.prototype.deleteStudent = function (student, callback) {

  var utils = new Utils();

  var sqldeletestudent = utils.getSqlDeleteStudent(student);

  connection.query(sqldeletestudent, function (err, resultStudent) {
    if (err || resultStudents.length == 0) {
      callback(null, err);
    } else {
      console.log("before delete student backend mysql controller" + resultStudents);

      callback(resultStudents);
    }
  });
}

// update student object in DB
DatabaseMySql.prototype.updateStudent = function (student, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateStudent = utils.getSqlUpdateStudent(student);

    /* -- Start update Student -- */
    connection.query(sqlUpdateStudent, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Student successfully updated in the system!");
        });
      }
    });
  });
}



// Mentor Model related functions ..............................................................
// get mentors' objects
DatabaseMySql.prototype.getMentors = function (callback) {

  var utils = new Utils();

  var sqlSelectAllMentors = utils.getSqlSelectAllMentors();

  connection.query(sqlSelectAllMentors, function (err, resultMentor) {
    if (err || resultMentor.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultMentor[i]) {
        resCom.push(utils.generateMentor(resultMentor[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get mentor object by mentor id
DatabaseMySql.prototype.getMentor = function (mentorId, callback) {

  var utils = new Utils();

  var sqlSelectMentor = utils.getSqlSelectMentor(mentorId);

  connection.query(sqlSelectMentor, function (err, resultMentor) {
    if (err || resultMentor.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateMentor(resultMentor[0]));
    }
  });
}

// get mentor object by first name
DatabaseMySql.prototype.getMentorByFname = function (mentorFname, callback) {

  var utils = new Utils();

  var sqlSelectMentor = utils.getSqlSelectMentorByFname(mentorFname);

  connection.query(sqlSelectMentor, function (err, resultMentor) {
    if (err || resultMentor.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateMentor(resultMentor[0]));
    }
  });
}

// insert mentor object to DB
DatabaseMySql.prototype.insertMentor = function (mentor, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertMentor = utils.getInsertSqlMentor(mentor);

    /* -- Start insert Mentor -- */
    insertSql(sqlInsertMentor, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Mentor successfully inserted into the system!");
        });
      }
    });
  });
}

// update mentor object in DB
DatabaseMySql.prototype.updateMentor = function (mentor, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateMentor = utils.getSqlUpdateMentor(mentor);

    /* -- Start update Mentor -- */
    insertSql(sqlUpdateMentor, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Mentor successfully updated in the system!");
        });
      }
    });
  });
}



// Company Model related functions ..............................................................
// get companies' objects
DatabaseMySql.prototype.getCompanies = function (callback) {

  var utils = new Utils();

  var sqlSelectAllCompanies = utils.getSqlSelectAllCompanies();

  connection.query(sqlSelectAllCompanies, function (err, resultCompany) {
    if (err || resultCompany.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultCompany[i]) {
        resCom.push(utils.generateCompany(resultCompany[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}

// get company object by company id
DatabaseMySql.prototype.getCompany = function (companyId, callback) {

  var utils = new Utils();

  var sqlSelectCompany = utils.getSqlSelectCompany(companyId);

  connection.query(sqlSelectCompany, function (err, resultCompany) {
    if (err || resultCompany.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateCompany(resultCompany[0]));
    }
  });
}

// get company object by name
DatabaseMySql.prototype.getCompanyByName = function (companyName, callback) {

  var utils = new Utils();

  var sqlSelectCompany = utils.getSqlSelectCompanytByName(companyName);

  connection.query(sqlSelectCompany, function (err, resultCompany) {
    if (err || resultCompany.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateCompany(resultCompany[0]));
    }
  });
}

// insert company object to DB
DatabaseMySql.prototype.insertCompany = function (company, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertCompany = utils.getInsertSqlCompany(company);

    /* -- Start insert Company -- */
    insertSql(sqlInsertCompany, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Company successfully inserted into the system!");
        });
      }
    });
  });
}

// update company object in DB
DatabaseMySql.prototype.updateCompany = function (company, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateCompany = utils.getSqlUpdateCompany(company);

    /* -- Start update Company -- */
    insertSql(sqlUpdateCompany, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Company successfully updated in the system!");
        });
      }
    });
  });
}

// Milestone Model related functions ..............................................................
// get milestone object by id
DatabaseMySql.prototype.getMilestone = function (milestoneId, callback) {

  var utils = new Utils();

  var sqlSelectMilestone = utils.getSqlSelectMilestone(milestoneId);

  connection.query(sqlSelectMilestone, function (err, resultMilestone) {
    if (err || resultMilestone.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateMilestone(resultMilestone[0]));
    }
  });
}

// insert milestone object to DB
DatabaseMySql.prototype.insertMilestone = function (milestone, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertMilestone = utils.getInsertSqlMilestone(milestone);

    /* -- Start insert Milestone -- */
    insertSql(sqlInsertMilestone, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Milestone successfully inserted into the system!");
        });
      }
    });
  });
}

// update milestone object in DB
DatabaseMySql.prototype.updateMilestone = function (milestone, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateMilestone = utils.getUpdateSqlMilestone(milestone);

    /* -- Start update Milestone -- */
    insertSql(sqlUpdateMilestone, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Milestone successfully updated in the system!");
        });
      }
    });
  });
}



// Project Model related functions ..............................................................
// get project object by id
DatabaseMySql.prototype.getProject = function (projectId, callback) {

  var utils = new Utils();

  var sqlSelectProject = utils.getSqlSelectProject(projectId);

  connection.query(sqlSelectProject, function (err, resultProject) {
    if (err || resultProject.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateProject(resultProject[0]));
    }
  });
}

// insert project object to DB
DatabaseMySql.prototype.insertProject = function (project, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertProject = utils.getInsertSqlProject(project);

    /* -- Start insert Project -- */
    insertSql(sqlInsertProject, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Project successfully inserted into the system!");
        });
      }
    });
  });
}

// update project object in DB
DatabaseMySql.prototype.updateProject = function (project, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateProject = utils.getUpdateSqlProject(project);

    /* -- Start update Project -- */
    insertSql(sqlUpdateProject, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Project successfully updated in the system!");
        });
      }
    });
  });
}



// ProjectIdea Model related functions ..............................................................
// get projectIdea object by id
DatabaseMySql.prototype.getProjectIdea = function (projectIdeaId, callback) {

  var utils = new Utils();

  var sqlSelectProjectIdea = utils.getSqlSelectProjectIdea(projectIdeaId);

  connection.query(sqlSelectProjectIdea, function (err, resultProjectIdea) {
    if (err || resultProjectIdea.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateProjectIdea(resultProjectIdea[0]));
    }
  });
}

// insert projectIdea object to DB
DatabaseMySql.prototype.insertProjectIdea = function (projectIdea, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertProjectIdea = utils.getInsertSqlProjectIdea(projectIdea);

    /* -- Start insert ProjectIdea -- */
    insertSql(sqlInsertProjectIdea, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("ProjectIdea successfully inserted into the system!");
        });
      }
    });
  });
}

// update projectIdea object in DB
DatabaseMySql.prototype.updateProjectIdea = function (projectIdea, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateProjectIdea = utils.getUpdateSqlProjectIdea(projectIdea);

    /* -- Start update ProjectIdea -- */
    insertSql(sqlUpdateProjectIdea, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("ProjectIdea successfully updated in the system!");
        });
      }
    });
  });
}

//Delete Project idea
DatabaseMySql.prototype.deleteProjectIdea = function (projectIdea, callback) {

  var utils = new Utils();

  var sqldeleteProjectIdea = utils.getSqlDeleteProjectIdea(projectIdea);

  connection.query(sqldeleteProjectIdea, function (err, resultProjectIdea) {
    if (err || resultProjectIdea.length == 0) {
      callback(null, err);
    } else {
      callback(resultProjectIdea);
    }
  });
}


// Task Model related functions ..............................................................


// get task object by id
DatabaseMySql.prototype.getTask = function (taskId, callback) {

  var utils = new Utils();

  var sqlSelectTask = utils.getSqlSelectTask(taskId);

  connection.query(sqlSelectTask, function (err, resultTask) {

    if (err || resultTask.length == 0) {
      callback(null, err);
    } else {
      callback(utils.generateTask(resultTask[0]));
    }
  });
}

// insert task object to DB
DatabaseMySql.prototype.insertSkill = function (task, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertTask = utils.getInsertSqlTask(task);

    /* -- Start insert Task -- */
    insertSql(sqlInsertTask, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Task successfully inserted into the system!");
        });
      }
    });
  });
}

// update task object in DB
DatabaseMySql.prototype.updateTask = function (task, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateTask = utils.getUpdateSqlTask(task);

    /* -- Start update Task -- */
    insertSql(sqlUpdateTask, function (result, err) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Task successfully updated in the system!");
        });
      }
    });
  });
}







// POst Model related functions ..............................................................


/* insert Posts object in db */


DatabaseMySql.prototype.insertPost = function (Post, callback) {

  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertpost = utils.sqlqueryInsertPost(Post);

    /* -- Start insert post -- */
    connection.query(sqlInsertpost, function (err, result) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Post successfully inserted into the system!");
        });
      }
    });
  });
}

// get Post objects in DB
DatabaseMySql.prototype.getPost = function (err, callback) {

  console.log("backendmysql controller");
  var utils = new Utils();

  var sqlSelectPosts = utils.getSqlSelectPosts();

  connection.query(sqlSelectPosts, function (err, resultPosts) {
    if (err || resultPosts.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultPosts[i]) {
        resCom.push(utils.generatePost(resultPosts[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}


// updating a post
DatabaseMySql.prototype.updatePost = function (Post, callback) {
  console.log('in db file');
  var utils = new Utils();

  /* -- Start transation -- */
  //connection.connect();
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdatePost = utils.updatePost(Post);

    connection.query(sqlUpdatePost, function (err, result) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback(result);
        });
      }
    });
  });
}


//Delete POST from db
DatabaseMySql.prototype.deletePost = function (Post, callback) {

  var utils = new Utils();

  var sqldeletePost = utils.getSqlDeletePost(Post);
  console.log('sqldeletePost123');

  connection.query(sqldeletePost, function (err, resultPosts) {
    // console.log(resultPosts);

    if (err || resultPosts.length == 0) {
      callback(null, err);
    } else {
      callback(resultPosts);
    }
  });
}


// search Post objects in DB
DatabaseMySql.prototype.searchPost = function (Post, callback) {

  console.log(Post.postId);
  var utils = new Utils();

  var sqlSearchPosts = utils.getSqlSearchPosts(Post);

  connection.query(sqlSearchPosts, function (err, resultPosts) {
    if (err || resultPosts.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultPosts[i]) {
        resCom.push(utils.generatePost(resultPosts[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  });
}



// Postreply Model related functions ..............................................................




/* insert reply object in db */

DatabaseMySql.prototype.insertReply = function (reply, callback) {
  var utils = new Utils();

  /* -- Start transation -- */
  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlInsertreply = utils.getSqlInsertReply(reply);
    console.log(sqlInsertreply);

    connection.query(sqlInsertreply, function (err, result) {
      console.log(result);
      
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Post reply successfully inserted into the system!");
        });
      }
    });
  });
}

/* get Post reply object in db */

DatabaseMySql.prototype.getReply = function (rep, callback) {

  var utils = new Utils();
  // console.log("getting replies from backend mysql");

  var sqlSelectReply = utils.getSqlSelectReply(rep);
  // console.log(sqlSelectReply);

  connection.query(sqlSelectReply, function (err, resultsreply) {
    // console.log(resultsreply);

    if (err || resultsreply.length == 0) {
      callback(null, err);
    } else {
      var i = 0; var resCom = [];
      while (resultsreply[i]) {
        resCom.push(utils.generatepostReply(resultsreply[i]));
        i = i + 1;
      }
      callback(resCom);
    }
  })
}


// updating a post
DatabaseMySql.prototype.updateReply = function (reply, callback) {

  var utils = new Utils();

  /* -- Start transation -- */

  connection.beginTransaction(function (err) {
    if (err) { callback(null, err); }

    var sqlUpdateReply = utils.getSqlUpdateReply(reply);

    connection.query(sqlUpdateReply, function (err, result) {
      if (err) {
        connection.rollback();
        callback(null, err);
      } else {
        connection.commit(function (err) {
          if (err) {
            connection.rollback();
            callback(null, err);
          }
          console.log('Transaction Complete.');
          callback("Reply successfully updated in the system!");
        });
      }
    });
  });
}


//Delete reply from db
DatabaseMySql.prototype.deleteReply = function (reply, callback) {

  var utils = new Utils();

  var sqldeleteReply = utils.getSqlDeleteReply(reply);

  connection.query(sqldeleteReply, function (err, resultReplies) {
    if (err || resultReplies.length == 0) {
      callback(null, err);
    } else {
      callback(resultReplies);
    }
  });
}







// DatabaseMySql.prototype.getnortifications = function (err, callback) {

//   console.log("backendmysql controller");
//   var utils = new Utils(); 

//   var sqlSelectnortifications = utils.selectNortifications();
//  // console.log(sqlSelectnortifications);

//   connection.query(sqlSelectnortifications, function (err, resultPosts) {
//     if (err || resultPosts.length == 0) {
//       callback(null, err);
//     } else {
//       callback(resultPosts);
//     }
//   });
// }

/* CRUD MODELS FOR NORTIFICATIONS */
//GET NORTIFICATIONS

DatabaseMySql.prototype.getNotification = function (callback) {

  console.log("backendmysql controller notifications");
  var utils = new Utils();

  var sqlSelectNotifications = utils.getSqlSelectNotifications();

  connection.query(sqlSelectNotifications, function (err, resultNotifications) {
    if (err || resultNotifications.length == 0) {
      callback(null, err);
    } else {
      callback(resultNotifications);
    }
  });
}

module.exports = DatabaseMySql;
