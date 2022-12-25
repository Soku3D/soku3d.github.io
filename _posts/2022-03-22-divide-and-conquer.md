---
layout: single
title: 3주차 과제 (required)
date: 2022-03-22 10:00:00 +0900
---

## Divede and conquer
---


> 분할정복은 주어진 문제를 작은 부분 문제로 나누어 해결하는 방식이다. 이는 크게 세 단계로 나눌 수 있다.
1. 분할(Diveide) : 주어진 문제를 동일하게 해결할 수 있는 여러 부분문제로 나눈다.  
2. 정복(Conquer) : 각 부분 문제에 대한 해답을 구한다.
3. 결합(Combine) : 각 부분 문제의 해답을 결합하여 전체 문제에 대한 해답을 구한다.

### Merge Sort(합병정렬)
---

```
if(p<q)
{
    k=|(p+q)/2|
    MergeSort(A,p,k)
    MergeSort(A,k+1,q)
    A[p]~A[k]와 A[p]~A[k] 합병
}
```
>합병 정렬의 시간복잡도의 경우 더 이상 쪼갤 수 없을 때까지 쪼갰을 때 생기는 K 개의 층과 연관되어 있다.  
(층수) $\times$ O(n) = $\log_{2}{n}$ $\times$ O(n) =  O(nlogn) 


```c++
template <typename T>
vector<T> Merge(vector<T>& left, vector<T>& right)
{
	vector<T> sort;
	auto left_pt = left.begin();
	auto right_pt = right.begin();
	while (left_pt != left.end() && right_pt != right.end())
	{
		if (*left_pt < *right_pt)
		{
			sort.emplace_back(*left_pt);
			left_pt++;
		}
		else
		{
			sort.emplace_back(*right_pt);
			right_pt++;
		}
	}
	if (left_pt != left.end())
	{
		for (; left_pt != left.end();
			left_pt++)
		{
			sort.emplace_back(*left_pt);
		}
	}
	else
	{
		for (; right_pt != right.end(); right_pt++)
		{
			sort.emplace_back(*right_pt);
		}
	}
	return sort;
}

```
>2개로 나뉜 vector를 2개 받아서 새로운 vector sort에 모든 요소들을 작은값부터 넣는다.

```c++
template <typename T>
std::vector<T> Merge_sort(vector<T> arr)
{
	if (arr.size() > 1)
	{
		auto mid = size_t(arr.size() / 2);
		auto left = Merge_sort(vector<T>(arr.begin(), arr.begin() + mid));
		auto right = Merge_sort(vector<T>(arr.begin() + mid, arr.end()));

		return Merge(left, right);
	}
	
	return arr;
}
```

>`vector arr` 을 2개로 나누어 재귀적으로 정렬을 구현한다. 더 이상 나눌 수 없을 때까지 즉, 1개씩 남은 `left` `right` `vector`들을 `Merge` 함수로 보낸 뒤 `Merge`로 정렬된 `vector`를 다시 `left` right 로 넘겨서 `Merge`로 넘기는 재귀함수를 구현한다.

```c++
template <typename T>
void vector_print(vector<T> a)
{
	for (auto it : a)
	{
		cout << it << " " << "\n";
	}
}
```

>`vector` 구성요소를 나열하는 함수를 구현한다.

```c++
int main()
{
	std::vector<int> a;
	unsigned int b;
	cin >> b;
	while (b--)
	{
		int p;
		cin >> p;
		a.emplace_back(p);
	}
	
	auto sorted = Merge_sort<int>(a);
	
	vector_print<int>(sorted);

}
```

>main 함수는 임의의 크기의 수를 입력받은 뒤 그 수만큼의 숫자를 a vector에 입력 받고 그 a 벡터를 정렬하여 print 해준다.


### Quick Sort (퀵 정렬)
---

> 퀵 정렬은 pivot 이라 일컫는 임의의 원소를 기준으로 작은 것은 왼쪽으로, 큰 것은 오른쪽으로 분할하여 정렬한다.