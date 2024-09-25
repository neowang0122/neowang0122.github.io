# Lecture 8 A reliable transport Protocol -TCP 

1. Some basic features 
2. TCP reliable data transfer 
3. Flow Control 

GBN - Go back N 
SR - selective repeat  

## Stop and Wait 
- When the last contact is confirmed, continue with next 

```mermaid
 flowchart LR
Sender --> Receiver

```
## Bandwidth-delay product (Window)
- Max volume of the data in the channel 
- $Bits/s * sec$
### Optimal Window

iff ideal (no loss), 
	Window (N) = Bandwidth-delay product  

Loss Probability is $q$. 

We have a dilemma here: 
- On one hand, we want to fill as much as data in the pipe. 
- On another hand, we don't want to fill a lot. Since if there is a loss, we have to go back more data in retransfer. 

=> $(1-q)^N$ much of data to transfer each time 


# 1

## What data is exchanged to set up a TCP connections 

## A TCP connection is full-duplex service.

## Send buffer, Receiving buffer, Maximum segment size 

![[20240924-1347-55_Pasted image 20240924134753.png|500]]

MTU: 1500 bytes 
- Think like a package
- MTU stands for Maximum Transmission Unit. In networking, the MTU refers to the largest size of a data packet that can be transmitted over a network. It is often measured in bytes and determines the maximum size of a data unit that can be transmitted in one piece without getting fragmented. MTU size can vary depending on the type of network and protocols being used. Adjusting the MTU size can potentially impact network performance and efficiency.

TCP/IP header 40 bytes 


## TCP Segment Structure 

### Source and destination port # 

### Checksum field 

### 32-bit SEQ # and 32-bit ACK # 

### 16-bit receive window field 

- The buffer can be full and empty, so we need to make this info available for the sender to dynamically adjust the window for optimization 

### flag fields 

TCP views data as an ordered stream of bytes 

#### The SEQ # for a system is the byte-stream number of the first byte in the segment 

![[20240924-1358-10_Pasted image 20240924135808.png]]

If we cannot reuse a seq#, the maximum TCP segment we can send is 
$$
2^{32} * 8 \approx 34.4 \ \text{Gbits}
$$
(32 due to the 32-bit seq# we can use) 

#### The ACK# that the receivers puts in a segment is the seq # of the next byte the receiver is expecting. 

ACK bytes up to the first missing byte -> cumulative ACK 
- ACK #, intuitively think as the number you expect to request next. 

![[Pasted image 20240924140520.png]]


# RTT Estimation and Timeout 

> [!ai]
> RTT: 
> 
> RTT stands for Round-Trip Time in the context of computer networks. It refers to the time it takes for a signal or packet to travel from the sender to the receiver and back again. RTT is an important metric in network performance as it affects the overall latency and responsiveness of a network connection. It is typically measured in milliseconds (ms) and is influenced by factors such as distance, network congestion, and the quality of the network infrastructure.
> 

Timeout interval > RTT

Estimate RTT = (1 - $\alpha$) * Estimated RTT + $\alpha$ * Sample RTT 
where $\alpha = \frac{1}{8}$ 

acts like a low pass filter. 

![[Pasted image 20240924141042.png|527]]

## TCP never use Retransmitted Segment to measure Sample RTT. 

Counter eg. 
![[Pasted image 20240924141410.png|381]]

## DevRTT : Deviated RTT 

DevRTT = (1 - beta) * DevRTT + beta * | SampleRTT - Estimated RTT |  

Timeout Interval = Estimated RTT + 4 * DevRTT 


# Complementary mechanisms for managing retransmission of lost packets
## Cumulative Retransmission 

![[Pasted image 20240924143210.png|332]]

![[Pasted image 20240924143250.png|434]]

![[Pasted image 20240924143300.png]]

### When Retransmission happens, double the Timeout Interval. 

## Fast Retransmission

![[IMG_3715.jpeg]]

When 3 duplicate ACKs come, retransmit 
- Why not 2 duplicate ACKs? 
	- If choose 2, not that safe. 
- Why not 10 duplicate ACKs? 
	- If we do 10, no need to do this, as we have timeout 