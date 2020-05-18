import React, { useState, useEffect } from 'react';
import UserSidebar from './userSidebar/UserSidebar'
import { Switch, Route } from 'react-router-dom'
import './UserPanel.css'
import UserProfile from './userProfile/UserProfile'
import UserMatchmaking from './userMachmaking/UserMachmaking'
import UserPreferences from './userPreferences/UserPreferences'
import UserSettings from './userSettings/UserSettings'
import { companyStage } from '../../../constans';

const UserPanel = () => {
  const [active, setActive] = useState(0)
  const [linkedinError, setLinkedinError] = useState('')
  const [githubError, setGithubErrot] = useState('')
  const [profileCompleted, setProfileCompleted] = useState(true)
  const [preferencesCompleted, setPreferencesCompleted] = useState(true)
  const [cityError, setCityError] = useState('')
  const [remoteError, setRemoteError] = useState('')
  const [stageError, setStageError] = useState('')
  const [kindError, setKindError] = useState('')
  const [industryError, setIndustryError] = useState('')
  const [seniorityError, setSeniorityError] = useState('')
  const [employmentError, setEmploymentError] = useState('')
  const [salaryError, setSalaryError] = useState('')
  const [technologyError, setTechnologyError] = useState('')
  const [skillError, setSkillError] = useState('')

  const [contactsData, setContactsData] = useState({
    name: '',
    surname: '',
    email: 'pampers123@wp.pl',
    city: '',
    story: '',
    linkedin: '',
    github: '',
    userStatus: 'green',
    experiance: 0,
    cities: [
      'Białystok',
      'Bielsko-biała',
      'Bydgoszcz',
      'Częstochowa',
      'Gliwice',
      'Katowice',
      'Kielce',
      'Kraków',
      'Lublin',
      'Olsztyn',
      'Opole',
      'Poznań',
      'Rzeszów',
      'Szczecin',
      'Toruń',
      'Trójmiasto',
      'Warszawa',
      'Wrocław',
      'Łódź',
    ],
    technologies: [
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'HTML', icon: 'fab fa-html5' },
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'Scala', icon: 'fab fa-stripe-s' },
      { name: 'C', icon: 'fab fa-cuttlefish' },
      { name: 'DevOps', icon: 'fab fa-dev' },
      { name: 'Blockchain', icon: 'fab fa-bitcoin' },
      { name: 'SAP', icon: 'fab fa-stackpath' },
      { name: 'Kotlin', icon: 'fab fa-korvue' },
      { name: 'Ruby', icon: 'fas fa-gem' },
      { name: 'NET', icon: 'fas fa-bacon' },
      { name: 'Mobile', icon: 'fas fa-mobile' },
      { name: 'Testing', icon: 'fas fa-search' },
      { name: 'UX/UI', icon: 'fas fa-magic' },
      { name: 'PM', icon: 'fas fa-user' },
      { name: 'Game', icon: 'fas fa-gamepad' },
      { name: 'Security', icon: 'fas fa-shield-alt' },
      { name: 'Data', icon: 'fas fa-database' },
      { name: 'GO', icon: 'fas fa-hippo' },
      { name: 'Elixir', icon: 'fas fa-tint' },
      { name: 'Perl', icon: 'fas fa-apple-alt' },
    ],
    skills: [
      'JavaScript',
      'React',
      'Angular',
      'Java',
      'PHP',
      'Python',
      '.NET',
      'Node.js',
      'Docker',
      'HTML5',
      'Android',
      'AWS',
      'IOS',
      'CSS3',
      'C#',
      'Jira',
      'Git',
      'MySQL',
      'Typescript',
      'C++',
      'Big Data',
      'Linux',
      'React Native',
      'Ruby',
      'Symfony',
      'DevOps',
      'Swift',
      'MicrosoftSQL',
      'Vue.js',
      'Kotlin',
      'Kubernetes',
      'MongoDB',
      'Microsoft Azure',
      'QA',
      'java EE',
      'Spring',
      'PostgreSQL',
      'Blockchain',
      'Slack',
      'Hibernate',
      'Rails',
      'Jenkins',
      'testing',
      'sql',
      'Scala',
      'ElasticSearch',
      'jQuery',
      'Google Cloud Platform',
      'Github',
      'Selenium',
      'Scrum',
      'Magento',
      'Laravel',
      'Redux',
      'Golang',
      'Wordpress',
      'Ansible',
      'OracleDB',
      'Mobile',
      'Objective C',
      'Redis',
      'Terraform',
      'Django',
      'Amazon Web Service',
      'RebbitMQ',
      'Nginx',
      'Bootstrap',
      '.NET Core',
      'JS',
      'Flutter',
      'PWA',
      'Azure',
      'Kafka',
      'xamarin',
      'Sass',
      'Spring Boot',
      'Elixir',
      'Flask',
      'Cassandra',
      'Windows',
      'Circle CI',
      'html',
      'Apache Spark',
      'Ember',
      'Bash',
      'Vue',
      'Unity',
      'SAP',
      'BI',
      'Zend Framework',
      'Akka',
      'Power BI',
      'Dart',
      'Go',
      'handoop',
      'Erlang',
      'CSS',
      'Solr',
      'Photoshop',
      'GraphQL',
      'JSP',
      'Tensorflow',
      'ETL',
      'React.js',
      'IoT',
      'Rust',
      'Puppet',
      'R',
      'abap',
      'Microsoft BI Stack',
      'HAProxy',
      'Hbase',
      'Sinon.js',
      'Bower',
      'Hotjar',
      'Less',
      'ZeroMQ',
      'Swagger',
      'Visual Basic',
      'RWD',
      'Vagrant',
      'Babel',
      'SD-WAN',
      'Sinatra',
      'Axon Framework',
      'Haskell',
      'Mocha',
      'GNU R',
      'Perl',
      'Groovy',
      'BGP Optimization',
      'MapR',
      'DynamoDB',
      'Gulp',
      'Consul',
      'iVPN',
      'Aurelia',
      'Memcached',
      'Hystrix',
      'Twig',
      'Codeigniter',
      'Grunt',
      'Logstash',
      'Trello',
      'Chef',
      'Fuse',
      'Zabbix',
      'Network Security',
      'Kibana',
      'ArangoDB',
      'KnockOutJS',
      'Cypress.io',
      'Cloud Access',
      'C',
      'Tibco',
      'DataSecurity',
      'Fundation',
      'Flux',
      'PyTest',
      'Clojure',
      'Cloudformation',
      'ECMAScript',
      'Gradle',
      'F#',
      'Packer',
      'Maven',
      'Mesos',
      'Hive',
      'JEE',
      'Couchbase',
      'Pimcore',
      'Backbone',
      'Chai'
    ],
    userCities: [],
    remote: '',
    companyStage: {
      all: false,
      earlyStage: false,
      growthStage: false,
      estabilished: false,
      corporation: false
    },
    companyKind: {
      all: false,
      startup: false,
      softwareHouse: false,
      ecommerce: false,
      corporation: false
    },
    industry: {
      all: false,
      fintech: false,
      bloackchain: false,
      ecommerce: false,
      medicine: false,
      military: false,
      travel: false,
      martech: false,
      iot: false,
      logistic: false,
      beauty: false,
      other: false
    },
    seniority: {
      all: false,
      junior: false,
      mid: false,
      senior: false
    },
    employment: {
      all: false,
      b2b: false,
      permanent: false,
      mandateContact: false
    },
    salary: [0, 50],
    userTechnologies: [],
    userSkills: [],
    userPassword: 'dupa123',
  })

  const [inputData, setInputData] = useState({
    name: '',
    surname: '',
    email: '',
    city: '',
    story: '',
    linkedin: '',
    github: '',
    userStatus: '',
    experiance: 0,
    userCities: [],
    cities: [],
    technologies: [],
    skills: [],
    remote: '',
    companyStage: {},
    companyKind: {},
    industry: {},
    seniority: {},
    employment: {},
    salary: [],
    userTechnologies: [],
    userSkills: [],
    userPassword: '',
  })

  const toggleProfile = (newProfile, event) => {
    const { name } = event.target
    setContactsData(prevContactsData => ({ ...prevContactsData, [name]: newProfile }))
  }

  const togglePassword = (newPassword) => {
    setContactsData(prevContactsData => ({ ...prevContactsData, userPassword: newPassword }))
  }

  const toggleSalary = (newSalary) => {
    setInputData(prevInputData => ({ ...prevInputData, salary: newSalary }))
  }

  const toggleEmployment = (newEmployment) => {
    setInputData(prevInputData => ({ ...prevInputData, employment: newEmployment }))
  }

  const toggleSeniority = (newSeniority) => {
    setInputData(prevInputData => ({ ...prevInputData, seniority: newSeniority }))
  }

  const toggleIndustry = (newIndustry) => {
    setInputData(prevInputData => ({ ...prevInputData, industry: newIndustry }))
  }

  const toggleCompanyKind = (newKind) => {
    setInputData(prevInputData => ({ ...prevInputData, companyKind: newKind }))
  }

  const toggleCompanyStage = (newStage) => {
    setInputData(prevInputData => ({ ...prevInputData, companyStage: newStage }))
  }

  const toggleRemote = (newRemote) => {
    setInputData(prevContactsData => ({ ...prevContactsData, remote: newRemote }))
  }

  const searchCities = (newCities, prevCities) => {
    setInputData(prevInputData => ({ ...prevInputData, userCities: [...prevCities, newCities] }))
  }

  const toggleCities = (newCities, cities) => {
    setInputData(prevInputData => ({ ...prevInputData, cities: cities.filter((x) => !x.includes(newCities)) }))
  }

  const toggleTechnologies = (newTech, prevTechnologies) => {
    setInputData(prevInputData => ({ ...prevInputData, userTechnologies: [...prevTechnologies, newTech] }))
  }

  const toggleUserTechnologies = (newTechnologies, technologies) => {
    setInputData(prevInputData => ({ ...prevInputData, technologies: technologies.filter((x) => x != newTechnologies) }))
  }

  const toggleSkills = (newSkill, prevSkills) => {
    setInputData(prevContactsData => ({ ...prevContactsData, userSkills: [...prevSkills, newSkill] }))
  }

  const toggleUserSkills = (newSkills, skills) => {
    setInputData(prevInputData => ({ ...prevInputData, skills: skills.filter((x) => !x.includes(newSkills)) }))
  }

  const toggleExperiance = (newAge) => {
    setInputData(prevContactsData => ({ ...prevContactsData, experiance: newAge }))
  }

  const toggleActive = (newActive) => {
    setActive(newActive)
  }

  const toggleStatus = (newColor) => {
    setContactsData(prevContactsData => ({ ...prevContactsData, userStatus: newColor }))
  }


  function handleChange(event) {
    const { name, value } = event.target
    setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
    if (event.target.name === 'linkedin') {
      if (event.target.value.includes('https://www.linkedin.com/in/') || event.target.value.length === 0) setLinkedinError('');
      else setLinkedinError('Please provide a valid LinkedIn profile url');
    }
    else if (event.target.name === 'github') {
      if (event.target.value.includes('https://github.com') || event.target.value.length === 0) setGithubErrot('');
      else setGithubErrot('Please provide a valid Github profile url.');
    }
  }

  const submitCompanyVariables = (company) => {
    for (let i in company) {
      if (company[i] === true) {
        if (company === inputData.companyStage) {
          setStageError('')
          break;
        }
        if (company === inputData.companyKind) {
          setKindError('')
          break;
        }
        if (company === inputData.industry) {
          setIndustryError('')
          break;
        }
        if (company === inputData.seniority) {
          setSeniorityError('')
          break;
        }
        if (company === inputData.employment) {
          setEmploymentError('')
          break;
        }
      }
      else {
        const templError = 'Please choose at least 1 option!'
        if (company === inputData.companyStage) {
          setStageError(templError)
          //window.scrollTo(0, 800)
        }
        if (company === inputData.companyKind) {
          setKindError(templError)
          //window.scrollTo(0, 1000)
        }
        if (company === inputData.industry) {
          setIndustryError(templError)
          //window.scrollTo(0, 1200)
        }
        if (company === inputData.seniority) {
          setSeniorityError(templError)
          //window.scrollTo(0, 1200)
        }
        if (company === inputData.employment) {
          setEmploymentError(templError)
          //window.scrollTo(0, 1400)
        }
      }
    }
  }


  function handleSubmit(event) {
    event.preventDefault()
    if (active !== 1 && active !== 3) {
      setContactsData(inputData)
    }
    if (active === 1 && githubError === '' && linkedinError === '') {
      setContactsData(inputData)
      if (inputData.linkedin != '' && inputData.name != '' && inputData.surname != '') {
        setProfileCompleted(false)
      }
      else {
        setProfileCompleted(true)
      }
    }
    if (active === 3) {
      submitCompanyVariables(inputData.industry)
      submitCompanyVariables(inputData.seniority)
      submitCompanyVariables(inputData.employment)
      submitCompanyVariables(inputData.companyKind)
      submitCompanyVariables(inputData.companyStage)
      if (inputData.userSkills.length === 0) {
        setSkillError('Please choose at least 1 main skill/technology!')
        window.scrollTo(0, 5000)
      }
      if (inputData.userTechnologies.length === 0) {
        setTechnologyError('Please choose at least 1 main technology!')
        window.scrollTo(0, 5000)
      }
      if (inputData.salary[1] < 1) {
        setSalaryError('Salary must be greater than 0')
        window.scrollTo(0, 2250)
      }
      if (inputData.remote === '') {
        setRemoteError('Please choose an option!')
        window.scrollTo(0, 500)
      }
      if (inputData.userCities.length === 0) {
        setCityError('Please choose at least 1 city!')
        window.scrollTo(0, 200)
      }
      if (cityError === '' &&
        remoteError === '' &&
        stageError === '' &&
        kindError === '' &&
        industryError === '' &&
        seniorityError === '' &&
        employmentError === '' &&
        salaryError === '' &&
        technologyError === '' &&
        skillError === '') {
        setPreferencesCompleted(false)
        setContactsData(inputData)
      } else {
        setPreferencesCompleted(true)
      }
    }
  }

  useEffect(() => {
    setInputData(contactsData)
    setGithubErrot('')
    setLinkedinError('')
  }, [active, contactsData])

  useEffect(() => {
    setCityError('')
    setRemoteError('')
    setStageError('')
  }, [active])


  useEffect(() => {
    if (inputData.userCities.length !== 0) {
      setCityError('')
    }
    if (inputData.remote !== '') {
      setRemoteError('')
    }
    if (inputData.salary[1] > 0) {
      setSalaryError('')
    }
    if (inputData.userTechnologies.length > 0) {
      setTechnologyError('')
    }
    if (inputData.userSkills.length > 0) {
      setSkillError('')
    }
    submitCompanyVariables(inputData.companyStage)
    submitCompanyVariables(inputData.companyKind)
    submitCompanyVariables(inputData.industry)
    submitCompanyVariables(inputData.seniority)
    submitCompanyVariables(inputData.employment)
  }, [inputData])


  return (
    <div className='userPanelBox'>
      <UserSidebar
        active={active}
        toggleActive={toggleActive}
        contactsData={contactsData}
        toggleStatus={toggleStatus}
      />
      <Switch>
        <Route path={'/panel/profile'}>
          <UserProfile
            toggleExperiance={toggleExperiance}
            toggleActive={toggleActive}
            inputData={inputData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            linkedinError={linkedinError}
            githubError={githubError}
            toggleProfile={toggleProfile}
          />
        </Route>
        <Route path={'/panel/matchmaking'}>
          <UserMatchmaking
            toggleActive={toggleActive}
            contactsData={contactsData}
            profileCompleted={profileCompleted}
            preferencesCompleted={preferencesCompleted}
          />
        </Route>
        <Route path={'/panel/preferences'}>
          <UserPreferences
            inputData={inputData}
            toggleRemote={toggleRemote}
            toggleActive={toggleActive}
            toggleStatus={toggleStatus}
            searchCities={searchCities}
            toggleCompanyStage={toggleCompanyStage}
            toggleCompanyKind={toggleCompanyKind}
            toggleIndustry={toggleIndustry}
            toggleSeniority={toggleSeniority}
            toggleEmployment={toggleEmployment}
            toggleSalary={toggleSalary}
            toggleTechnologies={toggleTechnologies}
            toggleSkills={toggleSkills}
            handleSubmit={handleSubmit}
            toggleCities={toggleCities}
            toggleUserTechnologies={toggleUserTechnologies}
            toggleUserSkills={toggleUserSkills}
            cityError={cityError}
            remoteError={remoteError}
            stageError={stageError}
            kindError={kindError}
            industryError={industryError}
            seniorityError={seniorityError}
            employmentError={employmentError}
            salaryError={salaryError}
            technologyError={technologyError}
            skillError={skillError}
          />
        </Route>
        <Route path={'/panel/settings'}>
          <UserSettings toggleActive={toggleActive} togglePassword={togglePassword} password={contactsData.userPassword} />
        </Route>
      </Switch>
    </div>
  );
};

export default UserPanel;
