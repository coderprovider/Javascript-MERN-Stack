// Arrange a data sheet for a family phone book and publish it
let search = prompt('Enter Name:');

const phoneBook = [
    {   id          : 1,
        name        : 'najmul',
        phone       :'01727127145',
        location    :'mirpur',
    },
    {   id          : 2,
        name        : 'hasan',
        phone       :'01727687122',
        location    :'mirpur',
    },
    {   id          : 3,
        name        : 'sobuj',
        phone       :'01727687123',
        location    :'mirpur',
    },
    {   id          : 4,
        name        : 'prince',
        phone       :'01727687124',
        location    :'dhanmondi',
    },
    {   id          : 5,
        name        : 'opu',
        phone       :'01727687125',
        location    :'mirpur',
    },
    {   id          : 6,
        name        : 'meheraz',
        phone       :'01727687126',
        location    :'uttora',
    },
    {   id          : 7,
        name        : 'nipa',
        phone       :'01727687127',
        location    :'samoli',
    },
    {   id          : 8,
        name        : 'nafisa',
        phone       :'01727687128',
        location    :'mohammodpur',
    },
    {   id          : 9,
        name        : 'akas',
        phone       :'01727687129',
        location    :'mohammodpur',
    },
    {   id          : 10,
        name        : 'ratul',
        phone       :'01727687130',
        location    :'mohammodpur',
    },
    {   id          : 11,
        name        : 'puja',
        phone       :'01727687144',
        location    :'dhanmondi',
    },
    {   id          : 12,
        name        : 'rezaul',
        phone       :'01727687146',
        location    :'dhanmondi',
    },
    {   id          : 13,
        name        : 'akib',
        phone       :'01727687147',
        location    :'dhanmondi',
    },
    {   id          : 14,
        name        : 'abir',
        phone       :'01727687148',
        location    :'kolabagan',
    },
    {   id          : 15,
        name        : 'sneha',
        phone       :'01727687149',
        location    :'gulsan',
    },
    {   id          : 16,
        name        : 'asiq',
        phone       :'01727687150',
        location    :'farmgate',
    },
    {   id          : 17,
        name        : 'hridoy',
        phone       :'01727687115',
        location    :'savar',
    },
    {   id          : 18,
        name        : 'biplob',
        phone       :'01727687116',
        location    :'thakurgaon',
    },
    {   id          : 19,
        name        : 'riya',
        phone       :'01727687117',
        location    :'mirpur',
    },
    {   id          : 20,
        name        : 'popi',
        phone       :'01727687118',
        location    :'mirpur',
    },
];


for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name == search) {
        console.log(`
            id          : ${phoneBook[i].id}
            name        : ${phoneBook[i].name}
            phone       :'${phoneBook[i].phone}
            location    : ${phoneBook[i].location}
        `);
    }
    
}