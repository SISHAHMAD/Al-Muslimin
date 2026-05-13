const coursesData = [
    {
        id: 1,
        slug: "basic-tajweed",
        title: "Basic Tajweed (Level-1) -  مَعْهَدُ إِصْلاح المُسْلِمینَ",
        description:
            "A Tajweed Course is designed to help students recite the Qur’an correctly, following the rules of pronunciation, articulation, and rhythm as taught by the Prophet ﷺ.",
        video: "../../assets/islamic-cartoon.mp4",
        coreLearningTitle: "Core Learning - بنیادی تعلیمی",
        coreLearning: [
            "Introduction of Tajweed",
            "Makharij (Articulation points with details)",
            "Common mistakes in recitation",
            "Weekly Exam",
            "Practical recitation"
        ],
        keyFeaturesTitle: "Key Features - اہم خصوصیات",
        keyFeatures: [
            {
                title: "Expert Tutors",
                description:
                    "Learn from experienced teachers of Quranic recitation."
            },
            {
                title: "Spiritual Growth",
                description:
                    "Cultivate a deeper relationship with the Qur'an."
            },
            {
                title: "Practical Application",
                description:
                    "Intensive practice and correction sessions."
            },
            {
                title: "Flexible Learning",
                description:
                    "Online classes suitable for all schedules."
            }
        ],
        objectives: [
            "To recite the Qur’an accurately and beautifully",
            "To apply all Tajweed rules correctly",
            "To develop fluency and confidence"
        ],
        sessions: [
            "One-on-One Session",
            "Group Session"
        ],
        pricing: {
            monthlyFee: "₹1000/month",
            registrationFee: "₹1000"
        },
        contact: {
            phone: "9939092487",
            email: "mahadislahalmuslimin@gmail.com"
        }
    },
    {
        id: 2,
        slug: "advanced-tajweed",
        title: "Advanced Tajweed (Level-2) -  مَعْهَدُ إِصْلاح المُسْلِمینَ",
        description:
            "An Advanced Tajweed Course focuses on mastering the detailed rules of Qur’an recitation, improving fluency, and achieving a beautiful, accurate, and confident recitation.",
        video: "../../assets/islamic-cartoon.mp4",
        coreLearningTitle: "Core Learning - بنیادی تعلیمی",
        coreLearning: [
            "Refined Qur’an recitation with precise articulation (Makharij)",
            "Understanding subtle letter qualities (Sifat)",
            "Deep study of Ikhfa, Idgham and other Tajweed rules",
            "Levels of Tafkheem and Tarqeeq",
            "Advanced Waqf (Stopping Rules)",
            "Fluency and Rhythm (Tarteel)"
        ],
        keyFeaturesTitle: "Key Features - اہم خصوصیات",
        keyFeatures: [
            {
                title: "Qualified Tutors",
                description:
                    "Learn from experienced teachers of Quranic recitation."
            },
            {
                title: "Spiritual Growth",
                description:
                    "Cultivate a deeper relationship with the Qur’an."
            },
            {
                title: "Practical Learning",
                description:
                    "Intensive practice sessions with continuous correction and improvement."
            },
            {
                title: "Flexible Learning",
                description:
                    "Online learning suitable for different schedules and levels."
            }
        ],
        objectives: [
            "Master all advanced Tajweed rules",
            "Recite the Qur’an with precision and beauty",
            "Eliminate hidden and major mistakes (Khafi & Jali errors)",
            "Develop a natural flow and rhythm in recitation"
        ],
        sessions: [
            "One-on-One Session",
            "Group Session"
        ],
        pricing: {
            monthlyFee: "₹1000/month",
            registrationFee: "₹1000"
        },
        contact: {
            phone: "9939092487",
            email: "mahadislahalmuslimin@gmail.com"
        }
    },
    {
        id: 3,
        slug: "hifz",
        title: "Hifz e Qur'an Course - مَعْهَدُ إِصْلاح المُسْلِمینَ",
        description:
            "The Hifz e Qur'an Course is a structured and spiritually enriching program designed to help students memorize the Holy Qur'an with accuracy, proper Tajweed, and long-term retention.",
        video: "../../assets/islamic-cartoon.mp4",
        coreLearningTitle: "Core Learning - بنیادی تعلیمی",
        coreLearning: [
            "Foundation Level - Noorani Qaida and basic Qur'an reading",
            "Basic Tajweed rules",
            "Intermediate Level - Memorization of short Surahs (Juz Amma)",
            "Improvement in fluency and accuracy",
            "Advanced Level (Hifz Program) - Complete Qur'an memorization (Juz 1-30)",
            "Strong revision system for long-term retention"
        ],
        keyFeaturesTitle: "Key Features - اہم خصوصیات",
        keyFeatures: [
            {
                title: "Qualified & Experienced Tutors",
                description:
                    "Learn under skilled and experienced Qur'an teachers."
            },
            {
                title: "Spiritual Growth",
                description:
                    "Build a stronger connection with the Holy Qur'an and Islamic values."
            },
            {
                title: "Intensive Practice",
                description:
                    "Daily memorization, revision, and continuous learning support."
            }
        ],
        objectives: [
            "Memorize the complete Holy Qur'an with accuracy",
            "Develop strong Tajweed and pronunciation skills",
            "Improve fluency and confidence in recitation",
            "Strengthen long-term retention through revision"
        ],
        sessions: [
            "One-on-One Session",
            "Group Session"
        ],
        duration: {
            dailyClass: "30 Minutes or 1 Hour per day",
            courseDuration:
                "3 to 4 years depending on student's ability and consistency",
            revisionYear:
                "Includes an additional Daur (revision) year for strengthening memorization"
        },
        pricing: {
            monthlyFee: "₹1000/month",
            registrationFee: "₹1000"
        },
        contact: {
            phone: "9939092487",
            email: "mahadislahalmuslimin@gmail.com"
        }
    },
    {
        id: 4,
        slug: "nazira",
        title: "Nazira Qur'an Course - مَعْهَدُ إِصْلاح المُسْلِمینَ",
        description:
            "Nazira Qur'an Course (ناظرہ قرآن) is a foundational Islamic course designed to help students read the Holy Qur'an fluently with correct pronunciation and Tajweed.",
        video: "../../assets/islamic-cartoon.mp4",
        coreLearningTitle: "Core Learning - بنیادی تعلیمی",
        coreLearning: [
            "Basic foundation of Qur'an reading",
            "Basic Tajweed rules",
            "Regular Qur'an reading practice",
            "Proper pronunciation and Makharij",
            "Improvement in fluency and confidence"
        ],
        keyFeaturesTitle: "Key Features - اہم خصوصیات",
        keyFeatures: [
            {
                title: "Practical & Flexible Schedule",
                description:
                    "Learn at your own pace from anywhere with flexible class timings."
            },
            {
                title: "Qualified Tutors",
                description:
                    "Learn from experienced teachers of Qur'an recitation."
            },
            {
                title: "Spiritual Growth",
                description:
                    "Cultivate a deeper relationship with the Holy Qur'an."
            },
            {
                title: "Intensive Practice",
                description:
                    "Continuous practice sessions to improve fluency and accuracy."
            }
        ],
        objectives: [
            "Read the Holy Qur'an fluently",
            "Learn correct pronunciation (Makharij)",
            "Understand and apply basic Tajweed rules",
            "Build confidence in daily Qur'an recitation"
        ],
        sessions: [
            "One-on-One Session",
            "Group Session"
        ],
        pricing: {
            monthlyFee: "₹1000/month",
            registrationFee: "₹1000"
        },
        contact: {
            phone: "9939092487",
            email: "mahadislahalmuslimin@gmail.com"
        }
    },
    {
        id: 5,
        slug: "nursery-course",
        title: "Nursery Islamic Course - مَعْهَدُ إِصْلاح المُسْلِمینَ",
        description:
            "This course is specially designed for young children to introduce them to the beauty of Islam in a fun, gentle, and engaging way while building a strong foundation of love for their faith.",
        video: "../../assets/islamic-cartoon.mp4",
        coreLearningTitle: "Core Learning - بنیادی تعلیمی",
        coreLearning: [
            "Basic Qur'an learning",
            "Islamic beliefs (Aqeedah)",
            "Daily Ibadah and duas",
            "Islamic manners and etiquettes",
            "Introduction to basic Islamic values"
        ],
        keyFeaturesTitle: "Key Features - اہم خصوصیات",
        keyFeatures: [
            {
                title: "Qualified Tutors",
                description:
                    "Experienced instructors specially trained for teaching young children."
            },
            {
                title: "Online Classes",
                description:
                    "Safe and convenient online learning from the comfort of home."
            },
            {
                title: "Practical & Flexible Schedule",
                description:
                    "Short 30-minute classes designed to suit children's attention spans."
            },
            {
                title: "Interactive Learning",
                description:
                    "Fun and engaging activities that make Islamic learning enjoyable."
            }
        ],
        objectives: [
            "Build a strong Islamic foundation for children",
            "Teach basic Qur'an reading and Islamic values",
            "Develop good manners and daily Islamic habits",
            "Create love and connection with Islam from an early age"
        ],
        sessions: [
            "One-on-One Session",
            "Group Session"
        ],
        duration: {
            dailyClass: "30 Minutes per day"
        },
        pricing: {
            monthlyFee: "₹1000/month",
            registrationFee: "₹1000"
        },
        contact: {
            phone: "9939092487",
            email: "mahadislahalmuslimin@gmail.com"
        }
    },
    {
        id: 6,
        slug: "primary-islamic",
        title: "Primary Islamic Course - مَعْهَدُ إِصْلاح المُسْلِمینَ",
        description:
            "This course is designed to build a strong foundation of Islamic knowledge, character, and daily practice in young learners while nurturing their understanding of Islam in an engaging way.",
        video: "../../assets/islamic-cartoon.mp4",
        coreLearningTitle: "Core Subjects - بنیادی مضامین",
        coreLearning: [
            "Qur'anic studies",
            "Basic Arabic language learning",
            "Islamic beliefs (Aqeedah)",
            "Life of the Prophet ﷺ (Seerah)",
            "Islamic manners and etiquettes",
            "Daily Islamic practices and duas"
        ],
        keyFeaturesTitle: "Key Features - اہم خصوصیات",
        keyFeatures: [
            {
                title: "Qualified Tutors",
                description:
                    "Courses are taught by certified instructors with Islamic teaching expertise."
            },
            {
                title: "Online Classes",
                description:
                    "Interactive live classes with teachers through Zoom and online platforms."
            },
            {
                title: "Interactive Learning",
                description:
                    "Story-based teaching, quizzes, and child-friendly learning methods."
            },
            {
                title: "Practical & Flexible Schedule",
                description:
                    "Intensive practice and flexible timings for effective learning."
            }
        ],
        objectives: [
            "Build a strong Islamic foundation in children",
            "Develop good character and Islamic manners",
            "Teach basic Qur'anic and Arabic understanding",
            "Encourage daily Islamic practices and discipline"
        ],
        sessions: [
            "One-on-One Session",
            "Group Session"
        ],
        pricing: {
            monthlyFee: "₹1000/month",
            registrationFee: "₹1000"
        },
        contact: {
            phone: "9939092487",
            email: "mahadislahalmuslimin@gmail.com"
        }
    },
    {
        id: 7,
        slug: "basic-islamic",
        title: "Basic Islamic Course - مَعْهَدُ إِصْلاح المُسْلِمینَ",
        description:
            "Our Basic Islamic Studies Course offers a flexible and convenient way to enrich your personal and spiritual life with authentic Islamic knowledge according to the Qur'an and Sunnah.",
        video: "../../assets/islamic-cartoon.mp4",
        coreLearningTitle: "Core Subjects - بنیادی مضامین",
        coreLearning: [
            "Aqidah (Islamic Creed)",
            "Prophetic Biography (Seerah)",
            "Fiqh (Islamic Jurisprudence)",
            "Hadith Shareef",
            "Islamic manners and etiquettes",
            "Daily Islamic practices and understanding"
        ],
        keyFeaturesTitle: "Key Features - اہم خصوصیات",
        keyFeatures: [
            {
                title: "Practical & Flexible Timing",
                description:
                    "Study online at your own pace from anywhere with 90-minute daily classes."
            },
            {
                title: "Acquire Knowledge",
                description:
                    "Gain deeper insight into Hadith, Islamic history, and essential teachings."
            },
            {
                title: "Strengthen Faith",
                description:
                    "Deepen your understanding and connection to Islam."
            },
            {
                title: "Expert Tutors",
                description:
                    "Learn from qualified native Arabic and Islamic studies teachers."
            }
        ],
        objectives: [
            "Build a strong foundation in Islamic studies",
            "Understand authentic teachings of Islam",
            "Develop Islamic character and daily practices",
            "Strengthen faith through Qur'an and Sunnah"
        ],
        sessions: [
            "One-on-One Session",
            "Group Session"
        ],
        duration: {
            dailyClass: "90 Minutes per day"
        },
        pricing: {
            monthlyFee: "₹1000/month",
            registrationFee: "₹1000"
        },
        contact: {
            phone: "9939092487",
            email: "mahadislahalmuslimin@gmail.com"
        }
    },
    {
        id: 8,
        slug: "urdu-language",
        title: "Urdu Language Course - مَعْهَدُ إِصْلاح المُسْلِمینَ",
        description:
            "This Urdu Language Course is designed to help students learn Urdu from basic to advanced level with focus on reading, writing, speaking, grammar, and pronunciation.",
        video: "../../assets/islamic-cartoon.mp4",
        coreLearningTitle: "Core Learning - بنیادی تعلیمی",
        coreLearning: [
            "Beginner Level - Urdu alphabets, vocabulary, and basic reading practice",
            "Simple sentence formation and pronunciation",
            "Intermediate Level - Urdu grammar and tenses",
            "Paragraph reading and writing practice",
            "Daily conversation skills in Urdu",
            "Translation practice (Hindi ↔ Urdu ↔ English)",
            "Advanced Level - Essay writing (مضمون نویسی)",
            "Letter writing (خط نویسی)",
            "Introduction to Urdu poetry (شاعری)",
            "Advanced conversation and fluency development"
        ],
        keyFeaturesTitle: "Key Features - اہم خصوصیات",
        keyFeatures: [
            {
                title: "Easy Step-by-Step Learning",
                description:
                    "Structured lessons designed for smooth and gradual learning."
            },
            {
                title: "Focus on Speaking & Writing",
                description:
                    "Special attention on communication, grammar, and writing skills."
            },
            {
                title: "Suitable for Everyone",
                description:
                    "Perfect for kids, women, beginners, and Urdu language learners."
            },
            {
                title: "Practical & Flexible Schedule",
                description:
                    "Study online at your own pace from anywhere."
            }
        ],
        objectives: [
            "Read and write Urdu fluently",
            "Improve speaking and communication skills",
            "Understand Urdu grammar and sentence formation",
            "Develop confidence in translation and conversation"
        ],
        sessions: [
            "One-on-One Session",
            "Group Session"
        ],
        pricing: {
            monthlyFee: "₹1000/month",
            registrationFee: "₹1000"
        },
        contact: {
            phone: "9939092487",
            email: "mahadislahalmuslimin@gmail.com"
        }
    }
];
export default coursesData;
