#!/usr/bin/node

const log=console.log;
log('向控制台打印cpu架构信息以及操作系统版本信息');
log('arch:',process.arch)
log('platform:%s\n',process.platform);

log('打印进程id信息以及Node.js可执行文件的绝对路径信息');
log('pid:',process.pid)
log('execPath\n',process.execPath);

//标准输入流的读取操作，让程序暂停执行
//process.stdin.resume();

//ps aux 显示当前进程的信息

log('打印Node.js版本信息，当前登陆用户的id信息，当前登陆用户所属组id信息以及当前脚本所在路径信息');
log('node.js version:',process.version);
log('uid:',process.getuid());
log('gid:',process.getgid());
log('path:%s\n',process.cwd());

//id命令，验证程序输出的登录账户id信息是否正确
//pwd命令。验证程序输出的当前工作目录信息是否正确


log('打印内存使用情况');
log('rss:',process.memoryUsage().rss);
log('heapTotal:',process.memoryUsage().heapTotal);
log('heapUsed:,',process.memoryUsage().heapUsed);
log('external:%d\n',process.memoryUsage().external);

log('打印环境变量');
//log('env:',process.env);
log('LOGNAME:',process.env.LOGNAME);




