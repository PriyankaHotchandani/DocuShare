
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';
import { rgba } from 'polished';
import { useState } from 'react';
import signinimg from 'assets/images/sign-up.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Image from 'components/image';

const submitContact = async (event) => {
//   try {
//     const result = await excuteQuery({
//         query: 'INSERT INTO users (email, password) VALUES(?, ?)',
//         values: [email, password],
//     });
//     console.log( result );
// } catch ( error ) {
//     console.log( error );
// }
  e.preventDefault();
  const res = fetch('http://localhost:5000/auth/register', {
    body: JSON.stringify({
      'email': email,
      'password': password
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
  alert(`done registration`);
};
const SignInBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box as="section" id="home" sx={styles.section} overflow="hidden" height="650px !important" display="none">
      <Container style={{ backgroundColor: '#FFF4C8 ', width:"700px",height:"100%",borderRadius: '5px!important', overflow:"hidden"}}>
      <Flex as="figure" sx={styles.bannerImage}>
            <Image src={signinimg} alt="loginImage"width="300px" height="400px" />
          </Flex>
        <Box sx={styles.contentWrapper}>
        <form style={{marginLeft: "160px;",marginTop:"0px", width: "400px;",height:"100%", alignContent:"center"}}>
        <h3>Sign-Up</h3>

                 <div className="form-group">
                     <label>First name</label>
                     <input type="text" className="form-control" placeholder="First name" id='name'/>
                 </div>

                 <div className="form-group">
                     <label>Last name</label>
                     <input type="text" className="form-control" placeholder="Last name" id='lastname' />
                 </div>

                 <div className="form-group">
                     <label>Email</label>
                     <input type="email" name="email" className="form-control" placeholder="Enter email" id='email' />
                 </div>

                 <div className="form-group">
                     <label>Password</label>
                     <input type="password" name="password" value={password}onChange={(e) => {
              setPassword(e.target.value);
            }} className="form-control" placeholder="Enter password" id='password' />
                 </div>

                 <button type="submit" onSubmit={submitContact} className="btn btn-dark btn-lg btn-block"style={{marginTop:"10px"}}>Register</button>
                 <p className="forgot-password text-right">
                     Already registered <a href="/login">log in?</a>
                 </p>
            </form>
            
        </Box>
      </Container>
    </Box>
    
  );
};

export default SignInBox;

const styles = {
  form:{
    backgroundColor: '#FFFCF7',
    alignItems:'centre',
    overflow:'hidden',
    display:'none'
  },
  section: {
    backgroundColor: '#FFFCF7',
    pt: [14, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
  },
  contentWrapper: {
     gap: ['50px 50px'],
    marginTop:'0px',
    display: ['block', null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '0.95fr 1.05fr'],
     alignItems: 'center',
    minHeight: ['auto', null, null, null, '38vh', '100vh'],
    pt: [null, null, null, 8, 0, 9, null],
    '@media only screen and (min-width:1900px)': {
      pt: 10,
    },
  },
  bannerContent: {
    margin: [null, null, null, '0 auto', 0],
    maxWidth: [null, null, null, 600, 'none'],
    textAlign: [null, null, null, 'center', 'left'],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 14],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: 'textSecondary',
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: 'textSecondary',
      maxWidth: [470],
      m: [null, null, null, '30px auto', 0],
      mt: [3, null, null, null, 5],
    },
  },
  subscriptionForm: {
    maxWidth: [null, null, null, 470, 'none'],
    m: [null, null, null, '30px auto', '30px 0 0'],
    mt: [6],
    input: {
      backgroundColor: '#FFFFFF',
      border: '0 none',
      fontFamily: 'body',
      fontSize: [1, null, null, null, 2],
      px: [5],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('#02073E', 0.4),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
    },
  },
  sponsoredBy: {
    alignItems: 'center',
    maxWidth: [null, null, null, 470, 'none'],
    m: [null, null, null, '30px auto', '30px 0 0'],
    mt: [6],
    span: {
      fontSize: ['13px', null, null, null, 2],
      lineHeight: 2.62,
      color: rgba('#566272', 0.6),
    },
  },
  sponsor: {
    alignItems: 'center',
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ['60px', null, null, null, '80px', '100%'],
      },
    },
  },
  bannerImage: {
    alignItems: 'center',
    marginLeft:'190px',
    marginBottom:'0px',
    overflow:'hidden',
    mt: [9, null, null, null, 0],
    img: {
      maxWidth: [null, null, null, '80%', '100%'],
      m: [null, null, null, '0 auto', 0],
    },
  },
};