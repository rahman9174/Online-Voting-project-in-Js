
    var bjp = 0 ;
    var cong = 0;
    var mns = 0;
    var totalVote = 0;
    var resultSection1 = document.getElementById("resultSection");

    function bjpfun(){
        bjp = bjp + 1;
    totalVote++;
    console.log(` bjp : ${bjp}`);
    document.getElementById('bjpRes').innerHTML="BJP total votes : "+bjp;
    document.getElementById('overAllVotes').innerHTML="Over All voting : "+totalVote;
             
        }
    function congressfun(){
        cong = cong + 1;
    totalVote++;
    console.log(` congress : ${cong}`);
    document.getElementById('congRes').innerHTML="Congress total votes : "+cong;
    document.getElementById('overAllVotes').innerHTML="Over All voting : "+totalVote;

        }
    function mnsfun(){
        mns = mns + 1;
    totalVote++
    console.log(` mns : ${mns}`);
    document.getElementById('mnsRes').innerHTML="MNS total votes : "+mns;
    document.getElementById('overAllVotes').innerHTML="Over All voting : "+totalVote;
        }
    function result(){
            if(cong>bjp && cong>mns){
        // document.getElementById('show').innerHTML=" Winner party : Congress";
        document.getElementById('show').innerHTML = (`<strong> Winner Party is : Congress </strong> <br>
                <strong>OverAll voting : </strong>${totalVote} <br>
                <strong> Total vote for bjp :</strong> ${bjp}<br>
                <strong> Total vote for congress :</strong> ${cong} <br>
                <strong> Totl vote for mns :</strong> ${mns}<br><br>
                <strong> Totl vote for mns :</strong> ${mns}<br><br><br><br>
                <pre>"     Congratulations on your successful win in the election, 
                    I am so happy for you. I know you are the perfect choice for
                     this position and you will work for the people, God bless you." 
                     </pre>
                `);
            }
            else if(bjp > cong && bjp > mns){
        // document.getElementById('show').innerHTML=" Winner party : BJP";
        document.getElementById('show').innerHTML = (`<strong> Winner Party is : BJP </strong> <br>
                <strong>OverAll voting : </strong>${totalVote} <br>
                <strong> Total vote for bjp :</strong> ${bjp}<br>
                <strong> Total vote for congress :</strong> ${cong} <br>
                <strong> Totl vote for mns :</strong> ${mns}<br><br><br><br><br>
                <pre>"     Congratulations on your successful win in the election, 
                     I am so happy for you. I know you are the perfect choice for
                     this position and you will work for the people, God bless you." 
                     </pre>
                `);

            }
    else if(bjp<mns && cong < mns){
        // document.getElementById('show').innerHTML=" Winner party : MNS";
        document.getElementById('show').innerHTML = (`<strong> Winner Party is : MNS </strong> <br>
                <strong>OverAll voting : </strong>${totalVote} <br>
                <strong> Total vote for bjp :</strong> ${bjp}<br>
                <strong> Total vote for congress :</strong> ${cong} <br>
                <strong> Totl vote for mns :</strong> ${mns}<br><br><br><br><br>
                <pre>" Congratulations on your successful win in the election, 
                     I am so happy for you. I know you are the perfect choice for
                     this position and you will work for the people, God bless you." 
                     </pre>
                `);
            }
    else{
        // document.getElementById('show').innerHTML=" Winner party : All party equals vote";
        document.getElementById('show').innerHTML = (`<strong> Winner Party is : None (Because all party get the equals votes) </strong> <br>
                <strong>OverAll voting : </strong>${totalVote} <br>
                <strong> Total vote for bjp :</strong> ${bjp}<br>
                <strong> Total vote for congress :</strong> ${cong} <br>
                <strong> Totl vote for mns :</strong> ${mns}<br><br><br><br><br>
                
                `);
            }
            
        }