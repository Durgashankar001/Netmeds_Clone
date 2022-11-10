
  import {
    Stack,
    Progress
  } from '@chakra-ui/react'

  
  const Review = () => {
    return (
      <div  style={{height:"300px", width:"60%",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", marginLeft:"2%"}}>
       <div  style={{height:"30%", width:"100%"}}>
        <h4 style={{marginTop:"15px",color:"gray", fontWeight:"600", textAlign:"start",  marginLeft:"1%", paddingTop:"1.5%"}}>RATINGS & REVIEWS</h4>
        <h1 style={{ fontSize:"40px", color:"#BFBFBD",textAlign:"start", marginLeft:"1.5%"}}>0★<target style={{fontSize:"13px", color:"grey"}}>70 Ratings & 0 Reviews</target></h1>
       </div>
      <div  style={{display:"flex",height:"70%", width:"100%"}}>
        
        <div style={{display:"flex", height:"210px", width:"50%"}}>
          <div style={{height:"100%",width:"15%"}}>
              <h1 style={{marginTop:"7px", fontSize:"19px"}}>5<target style={{fontSize:"26px", color:"green"}}>★</target></h1>
              <h1 style={{marginTop:"3px", fontSize:"19px"}}>4<target style={{fontSize:"26px", color:"green"}}>★</target></h1>
              <h1 style={{marginTop:"4px", fontSize:"19px"}}>3<target style={{fontSize:"26px", color:"green"}}>★</target></h1>
              <h1 style={{marginTop:"5px", fontSize:"19px"}}>2<target style={{fontSize:"26px", color:"orange"}}>★</target></h1>
              <h1 style={{marginTop:"5px", fontSize:"19px"}}>1<target style={{fontSize:"26px", color:"red"}}>★</target></h1>
          </div>
          <div style={{height:"100%",width:"70%"}}>
            <Stack spacing={7} marginTop={5}>
                <Progress colorScheme='green' size='sm' value={97} />
                <Progress colorScheme='green' size='sm' value={80} />
                <Progress colorScheme='green' size='sm' value={42} />
                <Progress colorScheme='yellow' size='sm' value={73} />
                <Progress colorScheme='red' size='sm' value={27} />
            </Stack>
          </div>
          <div style={{height:"90%",width:"15%", borderRight:"1px solid grey"}}>
              <h1 style={{marginTop:"13px", fontSize:"19px",color:"gray", fontWeight:"600"}}>97%</h1>
              <h1 style={{marginTop:"13px", fontSize:"19px",color:"gray", fontWeight:"600"}}>80%</h1>
              <h1 style={{marginTop:"13px", fontSize:"19px",color:"gray", fontWeight:"600"}}>42%</h1>
              <h1 style={{marginTop:"13px", fontSize:"19px",color:"gray", fontWeight:"600"}}>73%</h1>
              <h1 style={{marginTop:"13px", fontSize:"19px",color:"gray", fontWeight:"600"}}>27%</h1>
          </div>
      </div>
      <div style={{ height:"210px", width:"50%"}}>
        <div style={{display:"flex",height:"40%", width:"80%", marginLeft:"10%", marginTop:"1%"}}>
            <div style={{height:"100%",width:"25%"}}>
             <img style={{marginTop:"5%"}} src="https://www.netmeds.com/assets/gloryweb/icons/rate-icon.png" alt="pic" />
            </div>
            <div style={{height:"100%",width:"30%"}}>
              <h6 style={{fontSize:"12px", fontWeight:"bold", marginTop:"30%"}}>Rate Product</h6>
            </div>
            <div style={{height:"100%",width:"43%"}}>
               <h1  style={{marginTop:"13%", fontSize:"27px",color:"#BFBFBD", fontWeight:"600"}}>★★★★★</h1>
            </div>
        </div>
        <div style={{display:"flex", height:"28%", width:"80%", marginLeft:"10%", marginTop:"5%", backgroundColor:"#E6E6E3"}}>
          <div style={{height:"100%",width:"15%", marginLeft:"15%"}}>
            <img style={{opacity:"50%", height:"37%", width:"40%", margin:"auto", marginTop:"37%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAhFBMVEX///8AAAD+/v77+/sEBASysrJ2dnZxcXEvLy/p6enx8fGgoKBZWVlOTk6ampr4+PjMzMzGxsbQ0NDe3t67u7s0NDTU1NTBwcE7Ozvn5+dCQkIgICDa2tomJiYZGRmUlJRqampkZGSFhYWqqqpHR0cTExOLi4tVVVV8fHw/Pz8jIyOHh4cHBeqLAAARyklEQVR4nO1diYKqvA4uLajUhVURVxR1cOb93++2SVudOYgbbv8lZ47jKJR8pP2apmkhpJFGGmmkkUYaaaSRRhpppJFGGmmkkecLpeKHHv0phBFK2At1qkWYRELcUZAEwYgLZPDBEdTPFGkvQrjT7lhChq3cQ2QC76tVu1c8QmZt21KyXUUSE1TGzxZhnNleQrLFP/mzDwn7T7QxMtpKPJaNuGxrHAh7sc/FRdVPtFCmgl/SbpsAuBEr4+fVSMV8IdRDSzUy25aGG/uSQQgwyAcCY7IdjSamfc3n+EZAG4eAin0k60ud6Wys6XDqeNwxFCIZRFrrI4EJzWdbqH0C1zyRIII5IhO1MRBd94dWRcUbgGMby48YSTqWgrrxAdYnmoyM9ooxRD3UPBgsNJXsBYMQ75OAoR0Eb2w0rkWsmpz4H5h2JhhEuCUMoH0GPgbIFG+IajeN9Tey3SWWrp+CQRDQZ8ASago7kNlU98vz2DAEZcwjCTII9mfsc+wFFiPRHDlC2Cs5KC5HYsgg+N1EIfsMaFJ76JeB563hkdoMgNHARt8K+jP0vD4BmOy/Npr7xP/1YYgiSUXWU187jtYk+qReGnjDtjWywlOfU/QQZW00DmTmXd9Jo90JwbLuFka96iG9jmbMFtqPUvRRcHAMtRLSRsIHUYfk5OpAAcZNMMBA7xd5l6oH9OjVCn9DE7o2y5oTAK1vkfgr7iibZlzejWuQAZw6x3PSIa8sEOyF/rwE1MkMwkKa7ABM4k+UOYfh1dyBR6dJd1CL5Jyc8e3kl8AbwIfT2MvMSGx9FA1gcIeIo45LyLW3X5zvDvaLrVWTbEfVoQppzmio+yjhb3i8beEATCDziOYQKENUW+Uix9c3snRXFyaUIa9sY6p9WQBNjFOYQFaYk0U70zeFwYCFTfEL54qqCHfACyb14rK2+SkV0JMls44mjW2Mn7kKmQ3ICDK0rHpMVEU8NiGXE76swl53riq4XarlDWIPTgBTtKn8eWGvraNDNW5Le4aCQQAT8itJpoY8Lg4yUumHdreWHr7WJYvkRDNnTN5KyRs2cPi3oxhc3uCVcTPWOmzPwGFE3QTdX9zEJLMmpu+vTwpyoqcHxSRvSIFxpWmMHkUGsRSDUA7mSb5VmbKDvjgIJ24L32rv2vre9GuRrx30wOVXFLgO8Q01ToGxpfgnGcQ2PTWQZ6IicbZwqdjlgXxRWmGpwoY/ccprEdniTwCTPN/R9V7yhmk14Pogg2BPLVifwjAaD55EOOK+DJloxjrs1fPrC/+je3bigoc4gPPL84J7IRhEIxM9tRxqWuiUDEcVpZbJQF2ln9Y51ikpSPFhtDEE45SdIxlEyQ8JOvp9Rw3HLm5jboa4pK/w8MEOhfGyYr6pU3oMkwyiWH+DITjxIsM5V6lHww4CKx4/vwb22qoKYn3Hp47jhUGmO4VJeLWXmChTzx4ekQRcQ62xjB+eUJW6xrtSYYEx9MzXqRerEq4+8XoR/XJfm0D4G7KrLjtMOMBuGw9TYcWhnJjwrmQ2Ff2fP3w6Q5gn6ut6uHVO06bEy3vGBxG84bNfg8/LxMFLDSmrdaRZJtrfwHp40p0Ft5dnpp3J8BS7cioax3BwVx4HCyPxlKRmnDIt5Q2qY73yTfCtQ1cT/4be9SnAdHyjo2vX3/7roIwUGID5ZrQh+uUb6Pp5wIA3Dv5GVQCLHCbHbNG+yCmns/KSzwFGFW9gfMOpbi1iuBEY51/iumVW/WltLDUxeFkPq2wgp4+m+iZAWPtEr3Dmmk8BdsQbC4dUdiyiIgbaCbY22C+/X1Wkapw122uexzjAKUXhK9/WnlRnRLAivh8w5PnZUb9cwRvoXIA/r3njZpfh0cBk8AzGKdjVLpzKiWTZlgRvKP+w49/hlj8cmHhJDcUtTvu9WpKprrTjKyJSJVd+dFVE3sCxvcBV6ciq+AZaDPyNW3owfeWHApN+717HCjEOQPV1S5TRk3zKn5eBwVvl4az4x99gGlepJXQcQODy1XTE+1mMQdVK+0c8f7oa4myjP9TkOffJnUl8jwKm5ufSc/ENo4Y42DfJimP/7mnVhwGDBKFf/kbl3Iv0D7d6XCkTjO4d8z6sKkL+xsTEN/LqmVuKvAFizcMaMt0eZjFR2p/4RvVIJRnqg4e1JIQ9kBVT40dZOTmXlBcexikBIzXMhz+ujaUd7aMvzk9D+guNC3njdDzkYgXqBqbjG67hjW0VH2KyQmAf4aonVFa/xTChRvCGcjimeZWqkKsSbrW/gbxRixoPACZxmfZ1Lr4h41EmONwJ7vAO/xb8CGCpiW8s8jPxWyb9DW2v4Lb4Rqkaj2hj7iG+kUPGa9XxvolvQPti3tsCI+5U84Z9Jr4hJLQ0b+z9W+MbJ/SoCxhVP0fzenlF1cLD/YV2Jr8xTaqu+YM6gZXEN6qOliSDcQDsl+tdLlArMBnfSDd6vLzNqzUVo0jf+FGSN94WmDzfNVPGF8Q3fLVgAMeVb2wxwRtztThKpnNVBnDF1ULMdZMLjoK74hvl2tRJHqJf1vkb3TOerBinTLWP3IHFbzXxvC6/TmDRl6Zu0b7O5Qb5Yz1eHiaQjVrvhGodwKj655r4hp1XXlIiCE184zv4p0+oAWEtFoMlUMTdmnm9Sr8XcZmctOE/cQBGrs58KLtKDcCo9AfdjqUD2U61E8UY+PPYfw2DEhRn6/EFOtViMfTnlRGkf1gZuBHta26pyOi8xJ+nei3BPVJLG5P5bF+6q13k9GRCHx5OgrH2e4W9yL/xDaDTNwDGNG9Ar5SfXWc+Gh543ivJ34C49jvEPKBfViL9wzM+RGgyWU/EN9ioG7s36nJQ6i5gkJHBiGuo26rKc8CuamTrfIDhP34vxLL4jyhnHtzp598FDHKDMA6A2i66Jw5UrzK+YZbwlfu9lHSxi+cvjN1LlvC0vyHjUfmZWkjB38DBdScp4UPxkUw1kkdUx8Qv0O2+qkiQN7BTyr3KMkT/NTJx0e+kZBAq74vbwwMGrwQmVOVzHd/YyvhGRSEyPr/VN+FEfEOM6AQwYJfuSy3GyErXQysnrIrpRWuc6ekUzLcpiW/ILO4elvdKYOJkvlU+3zRXWWulB8KxoV7vIPxeE0n4Ux5TVfHVFsMgExDiTClWehFJE+FY+73z5ASXU9PGJDB2U+aKueZdbYzkutFY3xF0VKeQAW+o+EZCSPms+dsAo2Rtumaw2ankZSJ5Q+U5DE/npbwLMHFyprgDNoEJT02CCXtZpv+C+Ea5xm8DjHDTOUu1+ydy45E3VHwe4wDl13oXYARmi7QIzSejck18s9kU+hv0RADrHYBR+J/Mj2CJn6lLfqWd4JhkZpzkaUJ0cPu9geW4nmP7rblRMAglhzx3wBWq/CgYV1avSH0DYKjHEi0xlmsNkUL24XE3LRvTyNbr2jrBmQHk2wDz1BKUHonNUrfNiBzIUcajOjr/EPvlD7AYJekKLbYmXrzQfsVkdtisjQJvIOROQs/Fsd8GmN6aSM6DxWq0KUYkR+P6aKy5ZRqz49Z3osQ3ARaoFfzSm1K+BQw4R5r5Qkuv4xD+BviS1RsrvBwYuut6hZbl4V8dHVqcjCis45iZdRyyfV1S7KuBoXfOBupUHISweK7bU38kY56jjo73gr/xKcAoxTXLtrVCEmfAILicbROJejjRg+t5SXyjtNQ3ACZP1TosccWXUEPXTcEg/GixWFzhbbwZMDgzUqnksRpjipdkq6Nr1mGcIv35i+b1Xg8M0xZGyiIzZUFJeXFH0aDhQ8i3uSx/4z2AUV3x5ik52iAn7qjKqEZpcrxML9xD8PXAUNUlntl3VTVjrt/dtY3DD8wxj68IVb8FMGEiHD7DjgB0Fq9Xk863fWQutRjzis1w3wQYVdtsZMue2TXrYCvM00uuWpf9emDAFZ5VLtpqwl4Y37ii2FcDAyVm5bBsFQPRm5B4H1YVmT5Rm+iAS8kkoFduqfoGwOSJ67+17yDbfuFE/GqtXg8M4jWtf/DY0+FmVeQjfqs2LweGSeXHxpruV+1dN46wEBlfuyFZ9PXAIDRIWnjmvF8MnCR0D1s+Ki2vVustgMlpcKe9WsbhLOUUYeBkO5pLHnX9mPzVwDB7RnRlnqd5D5ZIsN+HXK3Ny4ExogzEDtubocePCWOqfX1eVXyQNMAuKKoB9gxpgF1QVAPsGdIAu6CoBtgzpAF2QVENsGdIA+yCohpgz5AG2AVFNcCeIQ2wC4pqgD1DGmAXFNUAe4Y0wC4oqgH2DGmAXVBUA+wZ0gC7oKj/B2B3LR2sRehR2mqdwF6OrAF2QVFNVXyGNMAuKOqtqqLMDzle4H0HMIILVORKm4c/8umsQLqP2kzTwqfe3aMTPPTJtiy3hk2T7hNI9IGNPy14FOidxektKbuPf0zXWREK5GgwK70bWKQq9Zy/HBllZtvJ7d24KN2pRa/t27fNr0cELt6yMGe/uJM54AnZc7UUZe3qTMTXiHqoK6wcGRHMprsdHDxuVOW/rpz0rpt0p7jOConMtrIr1lecEMrMqiLLmm6y1iukLf+v+mZHbtu/n6ClrXGddt0Pdb1Dzm2XdInAfgbq+Y623jPgNWKeAryug6Ah91WSkf1SZLZaSgcPFuZ1bGhKYQNzvrQOlfF1wODSS+/CBYJngCHTev781xVeJuOA1fBIiYOIGun0Fy8GZS/68f08/0twPUCU/7RfJ611NyL3dMmlwGgd1boGuf8xGf+WSHG3jZd4U8dSLy7mqVHdLU8KrEHw4pVPrbm1XGq28Xn+eJMqHcz7Wgunx7+eLWaFzDs09EYaaaSRRhpppJFGGmmkkUYaaeS/LphrYXbHpUefqe/VF/To/eGsowDGIZiht2v5ex1zoRoD3OUC28TiNm/wBoNYsM0PPAWZKTx6l0FAw+ArqrYDUt/i1AdMf6jyVAgTTmW42R/V96LeZ8eViCyfdzk+9gyQAgy5jaLZSospPSkd5XrqhkJ0UoU+GW45o0J68AguswkNNS+/3pCzT+upAZi7gl1/5YO48hGZxcwDFdRznWIfVAUl4gJRqzA1PqSRgd2llml7vN90yajnUTLrcTLLNo74cNNlYW+YubNe3xFfipc028QPzqWh3OVuFnGPCatxr4i9eJcS8SHzOPc8l9Olw+Xf4kjuCWBcomZcniA+FAeJ3/h0Fowvr+Ng9c1I0pt7XithPX8Xe6sgd8SNy3y+SrKQr/xWwnv+I2FJa7VyN2tl69lKAOxuesvWpOBFqxUFk7ZTZIPZ12aZtrNeOmtny6QYtUYCQr5qJ0GWFdEu6w2yr4ASb+ZCvU17JOR7Tny+98igG2dhyp0WX3b9lCzFn7Nl12mPIsqL8LH0EfYj112FXuZknLdTcblgSeJ93uv6XyzqhS5ZJmQ5IN2i26Vusm/Jp8xEqxkbFQEpBj8J76TOziM8y4XJGMnkbvdjadUxZ91i2XKJu2u5yXLXirrFbp0OimXBCcl3Zx5JfKdQFi7zVGBqAbBIaJss6aAV+GnQJizsDugypkVM/N6PUDnZtGQNCtucpEVEuutdSMY03glIs1S2w7An1R1z8XbsRVnEll2XsZ1DmFcsM5ctd+2ULWMSt9wHR9qjNF35mctb8Sr1v9JWQpM1979I5Por4qZuP1rmvLsjP+t8x4L4J8jE7U57vhevY9brrkMyFG895BBK2nKbVjKWJY8pzxK62hUjtxf7XrpystDr7VYz0dDiFcE+5HEi+MnhBefrWbxpL6Nk0nWzNsvHvShck7S1z0nwtfN24xbhxXgQ7MjAiX+EYfp+mu27bDkiPZIMcAsu0bIKoWu8mWySZCJeRqtxVx7rkHzTD0j4NcmF6ff5aNUf7pOH4qJ/fv/6ilUeQY9/YTcIm4/RkqPp7xf94QOrIs4vQoelXAX1N9PegjoAPQqYYIPD5LZ2TB2n3A+q+3H9mRFmtsGDbpvqYx/Zxhj6PHJDXHl9T78zCjPmMe0XEdzZGWEdNGTq3mhfyfhNyg1TbhqeiIXg6wNxKQeQoSlwHpUST+3Lp8wj//CM78fwUV1UP2PBOFXKX1R5vuCT6Plm+AarK56PT3a5Btn/AC/B6tyAcSG2AAAAAElFTkSuQmCC" />
          </div>
          <div style={{height:"100%",width:"47%"}}>
            <h1 style={{marginTop:"18px", fontSize:"16px",color:"gray", fontWeight:"600", textAlign:"start"}}>WRITE REVIEW</h1>
          </div>
        </div>
    
      </div>
     </div>
    </div>
    );
  };
  
  export default Review;
  