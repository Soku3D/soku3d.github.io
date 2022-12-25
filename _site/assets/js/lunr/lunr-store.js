var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update"],
        "tags": [],
        "url": "/jekyll/update/2022/03/12/welcome-to-jekyll.html",
        "teaser": null
      },{
        "title": "git / Github",
        "excerpt":"Git : 버전관리시스템(VCS) : 저장소 Github : Git -&gt; 온라인 저장소 + 협업 툴 Github pages : web hosting 무료 (Jekyll) Git의 상태 Committed : 데이터가 로컬 데이터베이스에 저장된 상태 Modified : 수정된 데이터 파일이 Commit 되지 않은 상태 Staged : 수정한 파일을 곧 commit 할 것이라고 표시한 상태 명령어...","categories": [],
        "tags": [],
        "url": "/2022/03/16/initgit.html",
        "teaser": null
      },{
        "title": "Divede and conquer",
        "excerpt":"분할정복은 주어진 문제를 작은 부분 문제로 나누어 해결하는 방식이다. 이는 크게 세 단계로 나눌 수 있다. 분할(Diveide) : 주어진 문제를 동일하게 해결할 수 있는 여러 부분문제로 나눈다. 정복(Conquer) : 각 부분 문제에 대한 해답을 구한다. 결합(Combine) : 각 부분 문제의 해답을 결합하여 전체 문제에 대한 해답을 구한다. Merge Sort(합병정렬) if(p&lt;q)...","categories": [],
        "tags": [],
        "url": "/2022/03/22/divide-and-conquer.html",
        "teaser": null
      },{
        "title": "연속된 자료 구조와 연결된 자료 구조",
        "excerpt":"Contiguous data structures 연속된 자료 구조의 경우 모든 원소를 단일 메모리 청크에 저장하고, 각각의 메모리는 sizeof(type) 만큼 떨어져 있다. 따라서 임의의 원소(n만큼 떨어져 있는)에 대한 접근은 BA(Base Address)+n*sizeof(type) 을 통해 시간 복잡도 O(1)로 일정한 접근 시간으로 접근할 수 있다. 또한 연속된 자료 구조의 경우 동적 배열과 정적 배열로 나뉜다. Linked...","categories": [],
        "tags": [],
        "url": "/2022/03/27/data-structures.html",
        "teaser": null
      },{
        "title": "Binary search",
        "excerpt":"lower_bound lower_bound(v,v+n,x):=v[i-1]&lt;x&lt;=v[i]를 만족하는 i의 최솟값 upper_bound uper_bound(v,v+n,x):=v[i-1]&lt;=x&lt;v[i]를 만족하는 i의 최솟값 #include &lt;iostream&gt; #include &lt;vector&gt; #include &lt;algorithm&gt; using namespace std; int main() { vector&lt;int&gt; v{1,2,3,3,4,5} cout &lt;&lt; lower_bound(v.begin(), v.end(), 3);// 3을 처음으로 만나는 index 2를 출력 cout &lt;&lt; upper_bound(v.begin(), v.end(), 3);//3이 끝나고 다음 index 4 를 출력 } equal_range equal_range(v, v+n,...","categories": [],
        "tags": [],
        "url": "/2022/03/30/Binary-Search.html",
        "teaser": null
      },{
        "title": "Ford-Fulkerson Algorithm",
        "excerpt":"   Ford-Fulkerson Algorithm 줄여서 FFA는 네트워크 유량(network flow)의 최댓값을 구하는 알고리즘으로, 그리디 알고리즘에 속한다.    flowchart LR     S[S] --&gt; |3|A[A];     S --&gt; |3|B[B];     S --&gt;|3| C;   참고  https://blog.naver.com/kks227/220804885235  ","categories": [],
        "tags": [],
        "url": "/2022/04/21/Ford-Fulkerson-Algorithm.html",
        "teaser": null
      }]
