# gulpExample
## gulp &amp;&amp; require.js 使用实例


---------  --------- --------- 亲测实例 ----------- --------- --------- 

@  gulp使用简单方便  性能效率都很不错  现在什么都流行框架模块式开发 看上去也是高大上  现在不会框架模块式开发  
不懂node.js gulp.js require.js  AngularJS Vue.js  React.js 你就还是个菜鸟  nodejs 是一个里程碑，它是服务器语言
可比作php  我本人是php程序员  但很喜欢前端技术  没事自己就会去看看前端最新流行的框架和技术相关知识  前端学的深 一点不比
学后台开发的差 下面是步骤


## 安装nodejs -> 全局安装gulp -> 项目安装gulp以及gulp插件 -> 配置gulpfile.js -> 运行任务


请先下载按照 nodejs  NPM是随同NodeJS一起安装的包管理工具 一般按照了nodeJs 就自带了NPM了

### 1.  npm install -g gulp (全局安装gulp)
  安装完成  试试npm -v  
  ![image](https://github.com/zaizhan1990/gulpExample/blob/master/step/1.png)
  
  如果不行 可以设置环境把gulp命令设置成环境变量  或者 执行命令带上路径执行 例： C:\Users\wuzhizhong\AppData\Roaming\npm\gulp -v
  
  
  
### 2.项目跟目录下 新建package.json文件 ( package.json是基于nodejs项目必不可少的配置文件 ) 

  package.js 内容如下  
    ![image](https://github.com/zaizhan1990/gulpExample/blob/master/step/2.png)
  
  也可以使用npm命令 生成该文件
   ![image](https://github.com/zaizhan1990/gulpExample/blob/master/step/3.png)
   
   
 
### 3. npm install gulp 或 npm install --save-dev gulp (项目中单独安装gulp 加 --save-dev 会将gulp写进package.json文件依赖中 )  



### 4. 项目根目录新建gulpfile.js文件（ 重要  重要  重要 ）

    首先先 安装依赖包: 
      npm install gulp-minify-css （ css压缩依赖包 ）
      npm install gulp-concat  （ css合并依赖包 ）
      npm install gulp-uglify  （ js压缩依赖包 ）
      npm install gulp-rename  （重新命名依赖包 ）


    gulpfile.js文件内容如下:
    
    var gulp = require('gulp'),
        minifycss = require('gulp-minify-css');
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename')

    console.log('start ...');

    gulp.task('hcss',function(){
             gulp.src(['static/css/common/common.css','static/css/index.css'])
            .pipe(concat('index.css'))
            //.pipe(rename({suffix:'.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest('static/release/css'));
      });



    gulp.task('hjs',function(){
        gulp.src(['static/js/common/jquery.js','static/js/index.js'])
            .pipe(concat('index.js'))
            //.pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('static/release/js'));
    });


    gulp.task('default',['hcss','hjs']);
    
    
    
    
### 5. 执行gulp命令
       
       gulp default 
        
        执行后 生成 2个编译文件
        
        ![image](https://github.com/zaizhan1990/gulpExample/blob/master/step/4.png)
    
    
    


