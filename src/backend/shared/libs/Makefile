deploy: ##=> Deploy shared Lambda Layers using SAM
	$(info [*] Packaging and deploying shared Lambda libs layers...)
	sam build && \
	sam package \
		--s3-bucket amplify-flighttrip-dev-152829-deployment \
		--output-template-file packaged.yaml && \
	sam deploy \
		--template-file packaged.yaml \
		--stack-name flighttrip-shared-layers-dev \
		--parameter-overrides Stage=dev \
		--capabilities CAPABILITY_IAM

delete: ##=> Delete shared Lambda layers stack
	aws cloudformation delete-stack --stack-name $${STACK_NAME}-shared-layers-$${AWS_BRANCH}
