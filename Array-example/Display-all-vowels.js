function displayVowels()
{
    console.log("Hello");
    var myarray = ["SANDEEP","ADVAITH","HEMA"];
    var vowels = 0;
    for(i=0; i<myarray.length; i++)
    {
        var myname = myarray[i];
        for(j=0;j<myname.length;j++)
        {
            if(myname[j] == 'A' || myname[j]=='E' || myname[j]=='I' || myname[j]=='O' || myname[j]== 'U')
            {
                console.log("Displaying vowels" +myname[j]);
            }
        }
    }
}