/**
 * Main Controller for backend query functions
 * Routers will call to this controller and this will call to Database Model
 */


/* ---------  REQUIRES   -----------*/

var Company = require('../entities/company');
var Mentor = require('../entities/mentor');
var Milestone = require('../entities/milestone');
var Project = require('../entities/project');
var ProjectIdea = require('../entities/projectIdea');
var Skill = require('../entities/skill');
var Student = require('../entities/student');
var Task = require('../entities/task');
var User = require('../entities/user');
var DAOMySql = require('../models/backend-mysql-database');


/* ---------  CONTROLLERS - METHODS   -----------*/

function BackendController() { }

// insert user
BackendController.prototype.insertUser = function (req, callback) {
 
    var daoMsql = new DAOMySql();

    daoMsql.insertUser(req, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

/** DELETE user */
BackendController.prototype.deleteUser = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteUser(req, function (result, err) {
        console.log("connecting to database and deleting user" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("user deleted");

            callback(result);
        }
    });
}

/* CRUD operations for student */

//insert student
BackendController.prototype.insertStudent = function (req, callback) {

    var student = new Student(
        req.studentId,
        req.studentFname,
        req.studentLname,
        req.studentAddress,
        req.studentPhone,
        req.studentEmail,
        req.studentImgLink,
        req.studentDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.insertStudent(student, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}

// Get student by id object from DB model
BackendController.prototype.getStudent = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getStudent(req.userId, function (result, err) {
        console.log("Enter to the get student function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get ALL students' objects from DB model
BackendController.prototype.getStudents = function (callback) {

    var daoMsql = new DAOMySql();
    daoMsql.getStudents(function (result, err) {
        console.log("Enter to the get students function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update student object from DB model
BackendController.prototype.updateStudent = function (req, callback) {

    // Student object with updated details
    var student = new Student(
        req.studentId,
        req.studentFname,
        req.studentLname,
        req.studentAddress,
        req.studentPhone,
        req.studentEmail,
        req.studentImgLink,
        req.studentDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateStudent(student, function (result, err) {
        console.log("Enter to the update student function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}
/** DELETE STUDENT */
BackendController.prototype.deleteStudent = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteStudent(req, function (result, err) {
        console.log("connecting to database and deleting student" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("student deleted");

            callback(result);
        }
    });
}



/* User Authentcation function */
BackendController.prototype.auth = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getUser(req.userName, function (result, err) {
        console.log("Enter to the get user function" + result.userId);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("** no errors");
            if (result.userPassword == req.userPassword) {
                console.log("**** password matched");
                callback(result);
            } else {
                console.log("**** password mismatched");
                callback(null, err);
            }
        }
    });
}

// BackendController.prototype.insertStudent = function (req, callback) {

//     var student = new Student(
//         req.std_id, 
//         req.std_fname, 
//         req.std_lname, 
//         req.std_address, 
//         req.std_phone, 
//         req.std_email, 
//         req.std_image, 
//         req.std_description);

//     var daoMsql = new DAOMySql();

//     daoMsql.insert(user, function(result, err) { 
//         if (err) {
//             callback (null, err);
//         } else {
//             callback(result)
//         }
//     })
// }


// Mentor Object related functions ..............................................................
// Get ALL mentors' objects from DB model
BackendController.prototype.getMentors = function (callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getMentors(function (result, err) {
        console.log("Enter to the get mentors function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Get mentor by id object from DB model
BackendController.prototype.getMentor = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getMentor(req.userId, function (result, err) {
        console.log("Enter to the get mentor function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update mentor object from DB model
BackendController.prototype.updateMentor = function (req, callback) {

    // Mentor object with updated details
    var mentor = new Mentor(
        req.mentorId,
        req.mentorFname,
        req.mentorLname,
        req.mentorAddress,
        req.mentorPhone,
        req.mentorEmail,
        req.mentorImgLink,
        req.mentorDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateMentor(mentor, function (result, err) {
        console.log("Enter to the update mentor function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

//Delete mentor object from DB model
BackendController.prototype.deleteMentor = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteMentor(req, function (result, err) {
        console.log("connecting to database and deleting mentor" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("mentor deleted");

            callback(result);
        }
    });
}


// Company Object related functions ..............................................................
// Get ALLcompanies objects from DB model
BackendController.prototype.getCompanies = function (callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getCompanies(function (result, err) {
        console.log("Enter to the get companies function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}
// Get company by id object from DB model
BackendController.prototype.getCompany = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getCompany(req.companyId, function (result, err) {
        console.log("Enter to the get company function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update company object from DB model
BackendController.prototype.updateCompany = function (req, callback) {

    // Company object with updated details
    var company = new Company(
        req.companyId,
        req.companyName,
        req.companyAddress,
        req.companyPhone,
        req.companyEmail,
        req.companyDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateCompany(company, function (result, err) {
        console.log("Enter to the update company function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

//Delete company object from DB model
BackendController.prototype.deleteCompany = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteCompany(req, function (result, err) {
        console.log("connecting to database and deleting company" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("company deleted");

            callback(result);
        }
    });
}


// Milestone Object related functions ..............................................................
// Get milestone by id object from DB model
BackendController.prototype.getMilestone = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getMilestone(req.milestoneId, function (result, err) {
        console.log("Enter to the get milestone function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update milestone object from DB model
BackendController.prototype.updateMilestone = function (req, callback) {

    // Milestone object with updated details
    var milestone = new Milestone(
        req.milestoneId,
        req.milestoneSupposedDate,
        req.milestoneArchivedDate,
        req.milestoneDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateMilestone(milestone, function (result, err) {
        console.log("Enter to the update milestone function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

//Delete milestone object from DB model
BackendController.prototype.deleteMilestone = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteMilestone(req, function (result, err) {
        console.log("connecting to database and deleting Milestone" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("Milestone deleted");

            callback(result);
        }
    });
}


// Project Object related functions ..............................................................
// Get project by id object from DB model
BackendController.prototype.getProject = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getProject(req.projectId, function (result, err) {
        console.log("Enter to the get project function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update project object from DB model
BackendController.prototype.updateProject = function (req, callback) {

    // Project object with updated details
    var project = new Project(
        req.projectId,
        req.projectLeadMentor,
        req.projectStartingDate,
        req.projectDuration
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateProject(project, function (result, err) {
        console.log("Enter to the update project function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

//Delete project object from DB model
BackendController.prototype.deleteProject = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteProject(req, function (result, err) {
        console.log("connecting to database and deleting Project" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("Project deleted");

            callback(result);
        }
    });
}


// Skill Object related functions ..............................................................
// Get skill by id object from DB model
BackendController.prototype.getSkill = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getSkill(req.skillId, function (result, err) {
        console.log("Enter to the get skill function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update skill object from DB model
BackendController.prototype.updateSkill = function (req, callback) {

    // Skill object with updated details
    var skill = new Skill(
        req.skillId,
        req.skillName,
        req.skillLevel,
        req.skillCategory
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateSkill(skill, function (result, err) {
        console.log("Enter to the update skill function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

//Delete skill object from DB model
BackendController.prototype.deleteSkill = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteSkill(req, function (result, err) {
        console.log("connecting to database and deleting skill" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("skill deleted");

            callback(result);
        }
    });
}

// Task Object related functions ..............................................................

//Insert Task object from DB model

// Get task by id object from DB model
BackendController.prototype.getTask = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getTask(req.taskId, function (result, err) {
        console.log("Enter to the get task function" + result.taskId);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

// Update task object from DB model
BackendController.prototype.updateTask = function (req, callback) {

    // Task object with updated details
    var task = new Task(
        req.taskId,
        req.taskResponsibleStudent,
        req.taskArchivedDate,
        req.taskSupposedDate,
        req.taskDescription
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateTask(task, function (result, err) {
        console.log("Enter to the update task function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

//Delete task object from DB model
BackendController.prototype.deleteTask = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteTask(req, function (result, err) {
        console.log("connecting to database and deleting task" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("task deleted");

            callback(result);
        }
    });
}






// Controllers related to posts ..................................................................


//insert posts object from DB model
BackendController.prototype.insertPost = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.insertPost(req, function (result, err) {
        if (err || !result) {
            callback(null, err);
            console.log("error in inserting post");
        } else {
            callback(result);
        }
    })

}

//get all post  objects from DB model

BackendController.prototype.getPost = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getPost(req, function (result, err) {
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

//update post  object from DB model
BackendController.prototype.updatePost = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.updatePost(req, function (result, err) {
        if (err || !result) {
            console.log("** error in update or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    })

}

 
//delete post object from DB model

BackendController.prototype.deletePost = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deletePost(req, function (result, err) {
        console.log("connecting to database and deleting posts");

        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}


//search post object from DB model

BackendController.prototype.searchPost = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.searchPost(req, function (result, err) {
        console.log("connecting to database and searching posts");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}










/* insert post_reply to database*/

BackendController.prototype.insertReply = function (req, callback) {
    console.log("Insert post replies in backend_controller");
    var daoMsql = new DAOMySql();

    daoMsql.insertReply(req, function (result, err) {
        if (err || !result) {
            console.log("error in inserting reply");
            callback(null, err);
        } else {
            callback(result);
        }
    })

}

// get reply by postId from database

BackendController.prototype.getReply = function (req, callback) {
    // console.log("backend controller called by getreply");
    var daoMsql = new DAOMySql();

    daoMsql.getReply(req, function (result, err) {
        // console.log("connected to database and got replies");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("getting reply for posts");
            callback(result);
        }
    })
}



//update post reply from  database
BackendController.prototype.updateReply = function (req, callback) {

    // var daoMsql = new DAOMySql();
    var daoMsql = new DAOMySql();

    daoMsql.updateReply(req, function (result, err) {
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

//delete post_reply from database

BackendController.prototype.deleteReply = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.deleteReply(req, function (result, err) {
        console.log("connected to database and DELETED post");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}









// ProjectIdea Object related functions ..............................................................
// Get projectIdea by id object from DB model
BackendController.prototype.getProjectIdea = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getProjectIdea(req.projectIdeaId, function (result, err) {
        console.log("Enter to the get projectIdea function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}


/* insert project idea */

BackendController.prototype.insertProjectIdea = function (req, callback) {

    var projectidea = new ProjectIdea(0,
        req.projectIdeaDate,
        req.projectIdeaOwner,
        req.projectIdeaCategory);

    var daoMsql = new DAOMySql();

    daoMsql.insertProjectIdea(projectidea, function (result, err) {
        if (err) {
            callback(null, err);
        } else {
            callback(result);
        }
    })
}
// Update projectIdea object from DB model
BackendController.prototype.updateProjectIdea = function (req, callback) {

    // ProjectIdea object with updated details
    var projectIdea = new ProjectIdea(
        req.projectIdeaId,
        req.projectIdeaDate,
        req.projectIdeaOwner,
        req.projectIdeaCategory
    );

    var daoMsql = new DAOMySql();

    daoMsql.updateProjectIdea(projectIdea, function (result, err) {
        console.log("Enter to the update projectIdea function");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            callback(result);
        }
    });
}

/** DELETE PROJECT IDEA */
BackendController.prototype.deleteProjectIdea = function (req, callback) {
    var daoMsql = new DAOMySql();

    daoMsql.deleteProjectIdea(req, function (result, err) {
        console.log("connecting to database and deleting project idea" + result);
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("project idea deleted");

            callback(result);
        }
    });
}

/* crud controller for getnotifications */

BackendController.prototype.getNotification = function (req, callback) {

    var daoMsql = new DAOMySql();

    daoMsql.getNotification(function (result, err) {
        console.log("Enter to the get notifications");
        if (err || !result) {
            console.log("** error or no result");
            callback(null, err);
        } else {
            console.log("returning from controller");

            callback(result);
        }
    });
}





module.exports = BackendController;
