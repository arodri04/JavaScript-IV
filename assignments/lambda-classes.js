// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
        //name age location gender
    }
}
class Instructor extends Person {
    constructor(ininfo) {
        super(ininfo);
        this.favLanguage = ininfo.favLanguage;
        this.specialty = ininfo.specialty;
        this.catchPhrase = ininfo.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}
class Student extends Person {
    constructor(stinfo) {
        super(stinfo);
        this.previousBackground = stinfo.previousBackground;
        this.className = stinfo.className;
        this.favSubjects = stinfo.favSubjects;
    }
    listSubjects(arr) {
        // for (let i=0;i<arr.length; i++) {
            return arr;
        //}
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}
class PM extends Person {
    constructor(pminfo) {
        super(pminfo);
        this.gradClassName = pminfo.gradClassName;
        this.favInstructor = pminfo.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy time!`
    }
    debugsCode(student, subject) {
       return `${this.name} debugs ${student.name}'s code on ${subject}.` 
    }
}
//People//
const josh = new Instructor({
    name: 'Josh',
    location: 'idk',
    age: 21,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `this is awesome`
});
const jimmy = new Instructor({
    name: 'jimmy',
    location: 'tucumcari',
    age: 37,
    gender: 'male',
    favLanguage: 'english',
    specialty: 'Pizza eating',
    catchPhrase: `wait i messed up`
});
const sam = new Student({
    name: 'Sam',
    location: 'Socorro',
    age: 24,
    gender: 'male',
    previousBackground: 'Home Inspections',
    className: 'Web18',
    favSubjects: ['HTML']
});
const ique = new Student({
    name: 'ique',
    location: 'Socorro',
    age: 25,
    gender: 'male',
    previousBackground: 'PharmTech',
    className: 'medschool',
    favSubjects: ['Drugs and behavior', 'biology']
});
const liz = new PM({
    name: 'liz',
    location: 'Oregon',
    age: 27,
    gender: 'female',
    gradClassName: 'idkmybffjill',
    favInstructor: 'probably josh'
});
const billee = new PM({
    name: 'billee',
    location: 'Lodran',
    age: 22,
    gender: 'female',
    gradClassName: '#1',
    favInstructor: 'life'
});

console.log(sam.PRAssignment('javascript'));
console.log(liz.debugsCode(sam, 'Java'));
console.log(josh.demo('HTML'));
console.log(ique.listSubjects(ique.favSubjects));
console.log(josh.grade(sam, 'HTML'));
console.log(sam.sprintChallenge('Coding'));
console.log(billee.standUp('web18'));
