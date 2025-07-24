# docker buildx build --platform linux/amd64,linux/arm64 -t 558846430793.dkr.ecr.ap-northeast-2.amazonaws.com/eunho-invitation:latest .

docker build --platform linux/amd64 -t 558846430793.dkr.ecr.ap-northeast-2.amazonaws.com/eunho-invitation:latest .


aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 558846430793.dkr.ecr.ap-northeast-2.amazonaws.com

docker push 558846430793.dkr.ecr.ap-northeast-2.amazonaws.com/eunho-invitation:latest

kubectl config use-context eks-main
kubectl rollout restart deployment eunho-invitation