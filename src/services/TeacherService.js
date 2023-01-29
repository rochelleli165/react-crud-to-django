import axios from 'axios';

const Teacher_API_BASE_URL = "http://127.0.0.1:8000/api/testdb";

class TeacherService {

    getTeachers(){
        return axios.get(Teacher_API_BASE_URL);
    }

    createTeacher(Teacher){
        console.log(Teacher);
        return axios.post(Teacher_API_BASE_URL, Teacher);
    }

    getTeacherById(TeacherId){
        return axios.get(Teacher_API_BASE_URL + '/' + TeacherId);
    }

    updateTeacher(Teacher, TeacherId){
        return axios.put(Teacher_API_BASE_URL + '/' + TeacherId, Teacher);
    }

    deleteTeacher(TeacherId){
        return axios.delete(Teacher_API_BASE_URL + '/' + TeacherId);
    }
}

export default new TeacherService()