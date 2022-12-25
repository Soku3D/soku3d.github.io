---
layout : single
title : 이진탐색
date : 2022-03-30 19:00:00 +09:00
---
# Binary search

## lower_bound
> lower_bound(v,v+n,x):=v[i-1]<x<=v[i]를 만족하는 i의 최솟값

## upper_bound
> uper_bound(v,v+n,x):=v[i-1]<=x<v[i]를 만족하는 i의 최솟값

```c++
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> v{1,2,3,3,4,5}
    cout << lower_bound(v.begin(), v.end(), 3);// 3을 처음으로 만나는 index 2를 출력
    cout << upper_bound(v.begin(), v.end(), 3);//3이 끝나고 다음 index 4 를 출력
}
```
## equal_range
> equal_range(v, v+n, x) x의 범위를 찾는다

## binary_search
> binary_search(v, v + n, x) 는 x 의 존재 여부를 bool 형식으로 return 한다.
> lower_bound와 upper_bound 를 구현하면 결국 이분탐색으로 구현된다.
---
### lower_bound 구현
```c++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
int lowerbound(const vector<int>& a, int x)//정렬되어있는 a vector와 찾고자 하는 x 를 매개변수로 입력받는다
{
	const int n = a.size();
	int lo = -1, hi = n;
	while (lo + 1 < hi)
	{
		int mid = (lo + hi) / 2;
		if (!(a[mid] >= x))
			lo = mid;
		else
			hi = mid;// 찾고자 하는 x 를 발견하면 hi 를 땡겨 온다.
	}
	return hi;
}
int main()
{
	vector<int> v{ 1, 2, 3, 3, 4 };
	cout << lowerbound(v, 3); // 2 출력
	
}
```