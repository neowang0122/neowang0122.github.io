# Lecture 9 Internet Congestion Control 

1. Cause, Cost and solution 
2. TCP congestion control 
3. Throughput and Fairness. 

## Flow Control  

![[Pasted image 20240926133638.png]]

Window = Bandwidth * Delay 

We want to dynamically change the amount of the data we send out to each link. 


# 1. Cause, Cost and Solution 

## Reason 

Incoming traffic of the link exceeds its capacity. 
## Cost

- Longer (queuing) delay   
- Could introduce packet loss 
	- -> Congestion collapse 

![[Pasted image 20240926134640.png|400]]

> The 1 st congestion happened in 1988, in Lawrence-Berkley lab.  
## Solution 

1. End to end congestion control (TCP) 
2. Network-assisted ... 


# 2. TCP congestion control 

## What are we controlling? 

### CWin (Congestion Window) 

> [!ai] Title
> Congestion window is a TCP congestion control mechanism that limits the amount of data that can be sent before receiving an acknowledgment from the receiver. It helps prevent network congestion by adjusting the amount of data sent based on network conditions and the available bandwidth. The congestion window size is dynamically adjusted based on the network congestion signals received from the network.

$$
\text{LastByteSent - LastByteAcked} \leq \text{CWin}
$$
$$
\text{Send Rate} = \text{CWin} / RTT
$$
How does CWin evolve with time?  
Later we will see, it looks like below 

![[Pasted image 20240926140615.png|400]]
 

## 1. Congestion Avoidance

### Additive-Increase, Multiplicative Decrease (AIMD) 

> [!NOTE]
> Since I know roughly where I am, if my last transmission went smoothly, then I will graduate increase it to get closer to the congestion status. If went into the congestion status, then quickly back off. 

```python
if things go through: 
	CWin = CWin + 1 for every RTT 
if a loss event happens: 
	CWin = CWin / 2
```

 ![[Pasted image 20240926140615.png|400]]

Saw-tooth pattern 

## 2. Slow Start 

```
When TCP begins
	CWin = 1
	at every ACK:
		CWin = CWin + 1
	if timeout: 
		enters Slow Start 
		CWin = 1
	if 3 Duplicate ACK: 
		CWin = CWin / 2 
		AIMD is CA
```

## Threshold 

![[Pasted image 20240926141656.png|400]] 

Whenenver a loss event happens, 
$$
\text{Threshold} = \text{CWin} / 2
$$

## Table Summary

| State                     | Event      | Action                                                         |
| ------------------------- | ---------- | -------------------------------------------------------------- |
| Slow Start (SS)           | new ACK    | CWin <- CWin + 1 <br>if CWin > Threshold, enter CA state       |
| Congestion Avoidance (CA) | new ACK    | CWin <- CWin + $\frac{1}{\text{CWin}}$<br>still in CA state    |
| SS or CA                  | triple ACK | Threshold = CWin / 2<br>CWin = Threshold<br>Still in CA        |
| SS or CA                  | Timeout    | Threshold = CWin / 2  <br>CWin = 1<br>Go into Slow Start State |

# 3. Throughput and Fairness 

## What factors matters? 

- RTT
	- lower RTT -> higher throughput 
- Loss Rate 
	- lower loss rate -> higher throughput 

 ![[Pasted image 20240926143552.png]]

---
All above and lectures before will be tested in prelim. 

 