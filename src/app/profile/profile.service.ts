import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ProfileService{
    constructor(){}

    experienceDetails : any = [
        {
            id: 1,
            company: 'Deutsche Bank',
            location: 'Berlin, Germany',
            timeline: 'Aug 2023 - Present',
            role: 'Software Developer',
            work: ["Incoming Software Engineer"]
        },
        {
            id: 2,
            company: 'Société Générale',
            location: 'Bangalore, India',
            timeline: 'May 2022 - July 2022',
            role: 'Summer Analyst',
            work: ["Worked on building Deep Learning Models for Checkbox and Signature (both digitally and handwritten) detection in Financial documents of the bank. Annotated the provided Dataset using LabelImg image annotation tool",
            "Applied Transfer learning on YOLOv5, VGG19 and ResNet50 architectures and tuned the Hyperparameters using Genetic algorithm",
            "Achieved mAP score of 0.962 on YOLOv5 architecture,F1 score of 0.981 on VGG19 architecture and F1 score of 0.958 on ResNet50"]
        },
        {
            id: 3,
            company: 'LetsTransport',
            location: 'Bangalore, India',
            timeline: 'Sep 2021 - Dec 2021',
            role: 'Software Engineering Intern',
            work: ["Worked on building REST API for the company which can add all user types of the company and can do booking of vehicles as well",
            "Built an Apache Airflow DAG for fetching details of the registered vehicles which helped in reducing time by 10% in Post-Data Analysis",
            "Developed unit test cases for complete coverage of backend code and wrote Unit Test codes in Jest Framework to ensure correctness",
            "Worked on the Google Cloud Platform and removed the unnecessary resources which helped in reducing overall total cost"]
        },
        {
            id: 4,
            company: 'The Joining Hands',
            location: 'Durham, U.K',
            timeline: 'May 2021 - July 2021',
            role: 'Software Engineering Intern',
            work: ["Developed a database to establish relationships between various users of the company and eliminated redundancies in database",
            "Developed a Chat Application System where users can chat among themselves and integrated it into the website of the company",
            "Implemented K-Means Clustering Algorithm to group customers of the company on the basis of given location based features"]
        },
        {
            id: 5,
            company: 'The Rolling Circle',
            location: 'Mumbai, India',
            timeline: 'May 2020 - July 2020',
            role: 'Deep Learning Intern',
            work: ["Scraped audio data of Indian accents from various sources for the purpose of building a Voice-over model",
            "Explored and Experimented with various Deep Learning models for text to speech synthesis by going through research papers",
            "Applied Transfer Learning on Google Tacotron 2 model, achieved 7.5 ratings from users after tuning the Hyperparameters of model"]
        },
        {
            id: 6,
            company: 'IIT Kharagpur + Tata Martrade International Logistics Limited',
            location: 'Kharagpur, India',
            timeline: 'Dec 2019 - Feb 2020',
            role: 'Applied Science Intern',
            work: ["Developed an Algorithm for scheduling rakes of TMILL using Mixed Integer Linear Programming technique and coded in python",
            "Forecasted the arrival time of trains by applying Multiple Linear Regression model on the given GPS data",
            "Increased the total number of rakes scheduled and therefore increased the revenue of the company by 14 percent"]
        }
    ]

    blogData : any = [
        {
            id : 1,
            title:"Medium Article",
            img:'../assets/images/medium.png',
            url:'https://medium.com/@sk1244957'
        },
        {
            id : 2,
            title:"CP Template",
            img:'../assets/images/cpTemplate.png',
            url:'https://github.com/Suman16iitkgp/CP_Template'
        }
    ]
    about1 = "A graduate of IIT Kharagpur(Batch of 2023) with major in Industrial and Systems Engineering, minor in Mathematics and Computing and Micro Specialization in Artificial Intelligence and Applications, with immense interest in Competitive Programming, Backened Devlopment, Data Science ,Machine Learning, Deep Learning.I am an avid fitness enthusiast, I like to take care of my body, presentability, and personality as a whole."

    about2 = "I had a great internship experience at Societe Generale where I improved my skills in Machine Learning and Deep Learning. Before that, I had a fulfilling internship at LetsTransport where I worked on various projects related to backend development."
    
    about3 = "Demonstrating my commitment to continuous growth, I achieved a noteworthy global ranking of 253rd in Round G of Google Kickstart 2023, further underscoring my dedication to the field. Equally commendable is my qualification for Round 2 of the esteemed Facebook Hackercup, attesting to my problem-solving acumen and technical aptitude."
    resumeurl = "https://drive.google.com/file/d/1D-9JoAJL_5hvVQmls0jnMfdz5l9Kdnip/view?usp=drive_link"
}