# DNS records — zohaibbashirtechnicalservices.com

Snapshot taken 14 Oct 2026 from Namecheap hosting DNS (`dns1.namecheaphosting.com`), **before** moving DNS to Cloudflare.
Keep this to verify or restore records.

| Type | Name | Value | Notes |
|---|---|---|---|
| NS | @ | dns1.namecheaphosting.com, dns2.namecheaphosting.com | replaced by Cloudflare nameservers |
| A | @ | 104.207.79.167 | website — may be proxied (orange cloud) |
| CNAME | www | zohaibbashirtechnicalservices.com | website — may be proxied |
| MX | @ | 5 mx1-hosting.jellyfish.systems | **email — DNS only** |
| MX | @ | 10 mx2-hosting.jellyfish.systems | **email — DNS only** |
| MX | @ | 20 mx3-hosting.jellyfish.systems | **email — DNS only** |
| TXT | @ | `v=spf1 +a +mx +ip4:104.207.79.165 +ip4:104.207.79.166 include:spf.web-hosting.com ~all` | SPF |
| TXT | _dmarc | `v=DMARC1; p=none;` | DMARC |
| TXT | default._domainkey | `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy1nQwRyjJ2iqfIKOidLnyCZQFH9hd6fYqjH8h7YXNlkSDByQM2TxtGaF4qjf85iclebbgn9nKPaqNYvDrN5H5OwvmWlAiHM4zT5EfXT4d8ksAvM5LF1joevcpz9wRkL/QIw1Yqx/LCG/albqSjMyjWodsX6wMLxSoxV9MXkPF8a9w3pL+1QqO315Br1lh3u1TjgBI5Nn3EAG5pvqwYrWvk78XKVFdLx+Pf0Kxz6C681nRpTU2ScSDo+Z+flS7WDD37YYm23q5TbSMVoPl4H4psWBp3e6N16ZEMVRpltcGezQhYbBRFLA/Wc8BFWPaF3vp7oVz+HlgsFEl84hm8BXVwIDAQAB;` | DKIM |
| A | mail, webmail, cpanel, cpcalendars, cpcontacts, webdisk, ftp, autodiscover, autoconfig | 104.207.79.167 | **DNS only** (mail/cPanel/FTP can't go through the web proxy) |

Rule of thumb on Cloudflare: only `@` and `www` are proxied (orange cloud). Everything else stays **DNS only** (grey cloud).

To roll back: set the domain's nameservers at Namecheap back to **Namecheap BasicDNS / hosting DNS**
(`dns1.namecheaphosting.com`, `dns2.namecheaphosting.com`).
