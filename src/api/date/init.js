export const MapLoader = () => {//引入高德文件
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      //script.async = true
      script.src =
        'http://webapi.amap.com/maps?v=1.4.7&key=c936d34e6bf01501380b475bb9a3caee'
      script.onerror = reject
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
}

export const localIp = () => {//引入搜狐获取ip
      var script = document.createElement('script')
      script.type = 'text/javascript'
      //script.async = true
      script.src =
        'https://pv.sohu.com/cityjson?ie=utf-8'
      //script.onerror = reject
      document.head.appendChild(script)    
}



export const filterPhone = (phone)=>{ //验证手机号
  var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if(!myreg.test(phone)){ 
    return false; 
  }else{
    return true
  }
}
export const getTimeLength  = (statrtime,endtiem) => {//时间差几个小时
    var s1 = new Date(statrtime.replace(/-/g, '/'));
    var s2 = new Date(endtiem.replace(/-/g, '/'));
    var ms = Math.abs(s1.getTime() - s2.getTime());
    return ms / 1000 / 60 / 60;
}
export const getArrIndex = function(arr, obj) {//获取当前 对象 在数组的索引位置
  let index = null;
  let key = Object.keys(obj)[0];
  arr.every(function(value, i) {
      if (value[key] === obj[key]) {
          index = i;
          return false;
      }
      return true;
  });
  return index;
};

export const getweek = (val)=>{//计算当前日期周几
    var ayy = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    var Dateinit= new Date(val);//当前时间
    var num = Dateinit.getDay()//周几
    return ayy[num]
}

export const locaipcon = (callbackFn) => { //定位功能  回调定位数据
  var t = this
  var $ = {
      getJSON: function(url, params, callbackFuncName, callback){
          var paramsUrl ="",
              jsonp = this.getQueryString(url)[callbackFuncName];
          for(var key in params){
              paramsUrl+="&"+key+"="+encodeURIComponent(params[key]);
          }
          url+=paramsUrl;
          window[jsonp] = function(data) {
              window[jsonp] = undefined;
              try {
                  delete window[jsonp];
              } catch(e) {}

              if (head) {
                  head.removeChild(script);
              }
              callback(data);
          };

          var head = document.getElementsByTagName('head')[0];
          var script = document.createElement('script');
          script.charset = "UTF-8";
          script.src = url;
          head.appendChild(script);
          return true;
      },
      getQueryString: function(url) {
          var result = {}, queryString = (url && url.indexOf("?")!=-1 && url.split("?")[1]) || location.search.substring(1),
              re = /([^&=]+)=([^&]*)/g, m;
          while (m = re.exec(queryString)) {
              result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
          }
          return result;
      }
  };
  function showError(error){
      locationByIp();

      return false
      switch(error.code) {
          case error.PERMISSION_DENIED:
          alert("定位失败,用户拒绝请求地理定位");
          break;
          case error.POSITION_UNAVAILABLE:
          alert("定位失败,位置信息是不可用");
          break;
          case error.TIMEOUT:
          alert("定位失败,请求获取用户位置超时");
          break;
          case error.UNKNOWN_ERROR:
          alert("定位失败,定位系统失效");
          break;
      }
  };
//上为封装方法


    var x=document.getElementById("demo");
    var x1=document.getElementById("demo1");
    function getLocation(){
        if (navigator.geolocation){
            console.log(navigator)
            //x1.innerHTML=JSON.stringify(navigator)
            navigator.geolocation.getCurrentPosition(showPosition,showError,{
                    enableHighAcuracy : true,// 指示浏览器获取高精度的位置，默认为false  
                    timeout : 5000,// 指定获取地理位置的超时时间，默认不限时，单位为毫秒  
                    maximumAge : 2000 // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。  
                });
        }else{
          
            locationByIp();
            //x.innerHTML="Geolocation is not supported by this browser.";
          console.log("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position){
        //x.innerHTML="Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
        console.log("Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude);
    }
// 上面的代码可以知道，如果用户设备支持地理定位，则运行 getCurrentPosition() 方法。如果getCurrentPosition()运行成功，则向参数showPosition中规定的函数返回一个coordinates对象，getCurrentPosition() 方法的第二个参数showError用于处理错误，它规定当获取用户位置失败时运行的函数。
// 我们先来看函数showError()，它规定获取用户地理位置失败时的一些错误代码处理方式：

    function locationByIp() {
        var localtion={};
        localtion.ip = returnCitySN.cip;
        var url = "https://api.map.baidu.com/location/ip?callback=jsonp123";
        var params = {
            'ak' : 'lApvxfMWyOB9So5CZUOupRGg7wLYlbGx',
            'coor' : 'bd09ll',
            'ip' : localtion.ip
        };
        $.getJSON(url, params, "callback", function(data){
            localtion.province = data.content.address_detail.province;
            localtion.city = data.content.address_detail.city;
            localtion.district = data.content.address_detail.district;
            //x1.innerHTML=JSON.stringify(data.content);
            //sessionStorage.setItem('localIp',JSON.stringify(data.content))
            callbackFn(data.content)
        });
        // $.get(`http://ip.taobao.com/service/getIpInfo.php?ip=${localtion.ip}`,function(data){
        //     showLocation(JSON.parse(data))
        // })
    }

    function showLocation(){
        $.get(`http://gc.ditu.aliyun.com/geocoding?a=${returnCitySN.cname}`,function(res){
        })
    }
   getLocation()
}

export const timefilter = (arry,objinfo)=>{
    console.log(objinfo)
    console.log(arry)
        var hotel = arry
        for (var i = 0; i<hotel.length; i++){
            var reverseOrder = 'no'//是否为反向订单    BOOL reverseOrder = NO;
            var hotelID = hotel[i].hotelId //酒店ID
            var checkInLength = objinfo.checkInLength//获取入住时长：
            var item = hotel[i].array//酒店数据模型
            var fangan = []
            //房间类型
            for (var j = 0; j<item.length; j++) {
              
                var obj = {}
                //获取酒店-应房间的基准价格CGFloat price = [self returnHotlPricebyID:hotelID withRoomId:j];
                var price = (item[j].roomPrice).toFixed(2)//this.rmb(hotelID,item[j].roomId)//酒店id 房间id 酒店一小时的价格
                //小时价格
                var housePrice = (price*1.5).toFixed(2);
                //时段价格
                var framePrice = (price*1.3).toFixed(2);
                /****** 反向订单入住 ******/
                //设置固定的方向订单（当酒店ID=1或2时，并且入住时长大于3小于8）
                if ((4 <= checkInLength && checkInLength <= 7) && (hotelID == 1 ||hotelID == 2 ) ) {
                    //NSString *str = [[NSString alloc]init];//是反向订单
                    reverseOrder = 'yes';
                    obj.roomName = item[j].roomName//房间类型 大床房  双人房 三人房
                    obj.roomId = item[j].roomId
                    obj.floorNum = item[j].floorNum
                    obj.mm = item[j].roomAreaBegan + '-' +item[j].roomAreaEnd
                    obj.imgUrl = item[j].imgUrl

                    obj.startDate = objinfo.startDate
                    obj.startTime = objinfo.startTime
                    obj.endDate = objinfo.endDate
                    obj.endTime = objinfo.endTime
                    obj.timecon = checkInLength
                    obj.reverseOrder = 'yes'
                    obj.tuijian = '2' //1多时入住  2是传统入住
                    obj.duoshiPlan = '抱歉！暂时匹配不到合适的入住方案，推荐预订全日房，下单时可同时转售多余时间'
                    obj.oldPlan = '1天'+(price*24).toFixed(2)
                    obj.oldPlanRmb = (price*24).toFixed(2) //((days+1)*24*price) 
                    fangan.push(obj)
                } else {
                    /****** 正常房间拼接入住 ******/
                    //天
                    var days = 0;
                    //时段
                    var frames = 0;
                    //小时
                    var  hours = 0;
                    //入住天   整除   不满足1 为0
                    var dayitem = (checkInLength/24).toFixed(2)
                    days = Math.floor(checkInLength/24);
                    //入住时段 整除   不满足1 为()
                    frames = Math.floor((checkInLength - days*24)/6);
                    //入住小时 
                    hours = checkInLength - days*24 - frames*6;
                    
                    //平台方案入住价格
                    var roomsPrice = (days*price*24 + frames*6*framePrice + hours*housePrice).toFixed(2);
                    
                    //多时入住N小时
                    var priceString =  '多时住宿'+checkInLength+'小时:'
                    //N天*价格                NSString *toStayDays = days >0 ? [NSString stringWithFormat:@"%ld天*¥%.0f，",(long)days,price*24] : @"";
                    var dayString =  days > 0 ? '('+days+'天'+'*￥'+ (24*price).toFixed(2) + ')': ' '
                    //N个时段*价格                 NSString *toStayFrames = frames >0 ? [NSString stringWithFormat:@"%ld个时段*¥%.0f，",(long)frames,frames*6*framePrice] : @"";
                    var framesString =  frames > 0 ? '('+frames+'时段'+'*￥'+(framePrice*6).toFixed(2) + ')': ' '
                    //N小时*价格                NSString *toStayHours = hours >0 ? [NSString stringWithFormat:@"%ld小时*¥%.0f，",(long)hours,hours*housePrice] : @"";
                    var hoursString =  hours > 0 ? '('+hours+'小时'+'*￥'+ housePrice + ')': ' '
                    
                    /****** 如果拼接入住方案价格大于全天房价格 推荐入住全日房 ******/
                    if ((frames*6*framePrice + hours*housePrice) >= 24*price) {
                        
                        //多时入住方案
                        // var duoshiString =  priceString  + dayString + frames+"*"+(6*framePrice*frames) + hours +"*"+(hours*housePrice)
                        var duoshiString =  priceString  + dayString + framesString + hoursString + '=' + roomsPrice
                      
                        var oldString =  (days + 1) + '*￥' + (24*price).toFixed(2) + '晚'+'=' + '￥'+ ((days+1)*24*price).toFixed(2) 
                        //推荐传统入住
                        //NSString *oldPlan = [NSString stringWithFormat:@"%ld天*¥%.0f=¥%.f，",(long)days+1,price*24,(days+1)*price*24];
                        reverseOrder = 'no';
                        
                        obj.roomName = item[j].roomName//房间类型 大床房  双人房 三人房
                        obj.floorNum = item[j].floorNum
                        obj.roomId = item[j].roomId
                        obj.mm = item[j].roomAreaBegan + '-' +item[j].roomAreaEnd
                        obj.imgUrl = item[j].imgUrl

                        obj.startDate = objinfo.startDate
                        obj.startTime = objinfo.startTime
                        obj.endDate = objinfo.endDate
                        obj.endTime = objinfo.endTime
                        obj.timecon = checkInLength
                        obj.reverseOrder = 'no'
                        obj.tuijian = '2'//1多时入住  2是传统入住
                        obj.duoshiPlan = duoshiString
                        obj.duoshiPlanRmb = roomsPrice
                        obj.oldPlan = oldString
                        obj.oldPlanRmb = ((days+1)*24*price).toFixed(2) //((days+1)*24*price) 
                        
                        fangan.push(obj)
                    } else {
                        
                        /****** 推荐方案入住 ******/
                        //推荐返回入住方案
                        // var duoshiString =  priceString  + dayString + frames+"*"+(6*framePrice*frames) + hours +"*"+(hours*housePrice)
                        var duoshiString =  priceString  + dayString + framesString + hoursString + '=' + roomsPrice
                        console.log(frames,hours)
                        var oldDays = (frames + hours) > 0 ? (days+1) : days
                        var oldString =  oldDays + '晚'+'=' + '￥' + (oldDays*24*price).toFixed(2)
                      //推荐传统入住
                      //NSString *oldPlan = [NSString stringWithFormat:@"%ld天*¥%.0f=¥%.f，",(long)days+1,price*24,(days+1)*price*24];
                      reverseOrder = 'no';
                      obj.roomName = item[j].roomName//房间类型 大床房  双人房 三人房
                      obj.floorNum = item[j].floorNum
                      obj.roomId = item[j].roomId
                      obj.mm = item[j].roomAreaBegan + '-' +item[j].roomAreaEnd
                      obj.imgUrl = item[j].imgUrl

                      obj.startDate = objinfo.startDate
                      obj.startTime = objinfo.startTime
                      obj.endDate = objinfo.endDate
                      obj.endTime = objinfo.endTime
                      obj.timecon = checkInLength
                      obj.reverseOrder = 'no'
                      obj.tuijian = '2'//1多时入住  2是传统入住
                      obj.duoshiPlan = duoshiString
                      obj.duoshiPlanRmb = roomsPrice
                      obj.oldPlan = oldString
                      obj.oldPlanRmb = (oldDays*24*price).toFixed(2)  //((days+1)*24*price) 
                      
                      fangan.push(obj)
                        //[hotelPlanArray addObject:dict];

                    }
                }
                
            }
            hotel[i].arraynewroom = fangan  
        }
        var newarryroom = hotel
        return newarryroom
    
}
export const arryMinNum = (arry)=>{
    var a = []
    for(let x in arry){
        if(arry[x].oldPlanRmb){
          a.push(arry[x].oldPlanRmb)
        }
        if(arry[x].duoshiPlanRmb){
          a.push(arry[x].duoshiPlanRmb)
        }
    }
    let min=Math.min.apply(null, a);

    return min
}