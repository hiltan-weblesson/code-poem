class Note{
    userName
    sex
    birthDay
    constructor(userName,sex,birthDay){
        this.userName=userName;
        this.sex=sex;
        this.birthDay=birthDay
    }
    /**
     * 出生
     */
    start(){
        this.output(this.userName+"同志出生了。");
    }
    /**
     * 记录一个日记
     */
    add(msg){
        this.output(msg);
    }
    /**
     * 死亡
     */
    end(){    
        this.output(this.userName+"同志已成神。");
    }
    /**
     * 输出
     */
    output(msg){
        let date=new Date();
        let year=date.getFullYear();
        let month=date.getMonth();
        let da=date.getDate();
        //头
        console.log("--"+date.getFullYear()+"年" 
                           +date.getMonth()+"月"
                           +date.getDate()+"日 "+
                           +date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
                           +"-----------------------");
        //中间消息
        console.log(msg)
        //尾部个人信息
        console.log("---------------------------"+this.userName+"-"+this.sex+"-"+this.birthDay);
        console.log("\n");
    }
    
}
const test=new Note("谭房军","男","2019.11.01");
test.start();
test.add("我开始叫妈妈了");
test.add("我开始叫爸爸了");
test.add("今天，我生病了，好难受...");
test.add("今天，我又生病了，好难受...");
test.add("今天，我又生病了，好难受...");
test.add("今天，我又生病了，好难受...");
test.add("痛苦中......");
test.add("我开始上学了");
test.add("小学毕业了");
test.add("初中毕业了");
test.add("高中毕业了");
test.add("大学毕业了");
test.add("研究生毕业了");
test.add("我取得了中级职称");
test.add("我成为了一个小leader");
test.add("我取得了副高级职称");
test.add("我成为了一个副级leader");
test.add("我成为了一个正部级leader");
test.add("我成为了公司的技术一把手");
test.add("我取得了正高级职称");
test.add("我成为了公司的一把手");
test.add("我今天正式退休")
test.end();