toho unpublic json api

## all playing movies

https://hlo.tohotheater.jp/data_net/json/movie/TNPI3090.JSON?_dc=1535786497

## coming soon movies

https://hlo.tohotheater.jp/data_net/json/movie/TNPI3080.JSON?_dc=1535787699

## movie's playing theater

https://hlo.tohotheater.jp/images_net/movie/016130/TNPI3060_2_016130.JSON?_dc=1535787064

## movies's schedule in a specific theater

full curl:
```shell
curl 'https://hlo.tohotheater.jp/net/schedule/TNPI3070J02.do?__type__=json&movie_cd=016130&vg_cd=009&term=99&seq_disp_term=7&site_cd=&enter_kbn=&_dc=1535789025' \
    -H 'Cookie: t1_ticketId=avvDorTLOr15LyOMhh_b4ur7d7w23OMd; JSESSIONID=CF8993B56DFD75D06BFB48B09FEC4E75; Apache=172.20.253.81.1535787022456814; __mno__=5a62309ee7dd7cce425c7fd7f7330b44; sv_id=sv12; _ga=GA1.3.884132246.1535787023; _gid=GA1.3.563111861.1535787023; _pk_ses.1.df18=*; __acl__=5a62309ee7dd7cce425c7fd7f7330b44; __scr__=8252a4cbf254acb1fbce7c6dba35e020; VA_CONV_ID=ItQuujh4PlYVuDV9d9rdmCLKbdoMGj4g; VA_SESSION_ID=kWhofO0bkcot43dN2G6NhVtZeczfNbXP; __pp_uid=pYgFb3l009N1PHl22K9ClztLG9L0yMbP; EQPlayer_resume_Volume=100; __lastSelectedKoukaiYotei__=20180914; __lastSelectedSakuhinCd__=016130; _gat_UA-8351040-2=1; _pk_id.1.df18=8e466d604601e616.1535787023.1.1535788981.1535787023.; _td=4c08ec6c-ae99-441d-87fd-aba4b7301c99' \
    -H 'Accept-Encoding: gzip, deflate, br' \
    -H 'Accept-Language: en-US,en;q=0.9,ja;q=0.8' \
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.0 Safari/537.36' \
    -H 'Accept: application/json, text/javascript, */*; q=0.01' \
    -H 'Referer: https://hlo.tohotheater.jp/net/movie/TNPI3060J01.do?sakuhin_cd=016130' \
    -H 'X-Requested-With: XMLHttpRequest' \
    -H 'Connection: keep-alive' --compressed
```

url: https://hlo.tohotheater.jp/net/schedule/TNPI3070J02.do
param:
```
__type__: json
movie_cd: 016130
vg_cd: 009
term: 99
seq_disp_term: 7
site_cd: 
enter_kbn: 
_dc: 1535789025
```

## movie schedule in one theater in one day

full curl:
```shell
curl 'https://hlo.tohotheater.jp/net/schedule/TNPI3070J01.do?__type__=json&movie_cd=016130&vg_cd=009&show_day=20180901&term=99&isMember=&site_cd=009&enter_kbn=&_dc=1535789025' \
    -H 'Cookie: t1_ticketId=tWQaqL4K-nVRDXDb0dy8etc3YywSDZfq; JSESSIONID=CF8993B56DFD75D06BFB48B09FEC4E75; Apache=172.20.253.81.1535787022456814; __mno__=5a62309ee7dd7cce425c7fd7f7330b44; sv_id=sv12; _ga=GA1.3.884132246.1535787023; _gid=GA1.3.563111861.1535787023; _pk_ses.1.df18=*; __acl__=5a62309ee7dd7cce425c7fd7f7330b44; __scr__=8252a4cbf254acb1fbce7c6dba35e020; VA_CONV_ID=ItQuujh4PlYVuDV9d9rdmCLKbdoMGj4g; VA_SESSION_ID=kWhofO0bkcot43dN2G6NhVtZeczfNbXP; __pp_uid=pYgFb3l009N1PHl22K9ClztLG9L0yMbP; EQPlayer_resume_Volume=100; __lastSelectedKoukaiYotei__=20180914; __lastSelectedSakuhinCd__=016130; _gat_UA-8351040-2=1; _pk_id.1.df18=8e466d604601e616.1535787023.1.1535788981.1535787023.; _td=4c08ec6c-ae99-441d-87fd-aba4b7301c99' \
    -H 'Accept-Encoding: gzip, deflate, br' \
    -H 'Accept-Language: en-US,en;q=0.9,ja;q=0.8' \
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.0 Safari/537.36' \
    -H 'Accept: application/json, text/javascript, */*; q=0.01' \
    -H 'Referer: https://hlo.tohotheater.jp/net/movie/TNPI3060J01.do?sakuhin_cd=016130' \
    -H 'X-Requested-With: XMLHttpRequest' \
    -H 'Connection: keep-alive' --compressed
```

url: https://hlo.tohotheater.jp/net/schedule/TNPI3070J01.do
param:
```
__type__: json
movie_cd: 016130
vg_cd: 009
show_day: 20180901
term: 99
isMember: 
site_cd: 009
enter_kbn: 
_dc: 1535789025
```